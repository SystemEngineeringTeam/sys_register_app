import {
  collection,
  type DocumentData,
  type DocumentReference,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { atom } from 'jotai';
import { db } from './firebase';
import { type items, type options, type order, type orderCollection } from '../types/index';
import { loadable } from 'jotai/utils';
import { userAtomLoadable } from '../login/AdminLogin';
import { CollectionReference } from 'firebase/firestore';

// uidAtomは、userAtom(userAtomLoadable)に変化があった場合に再評価される
const uidAtom = atom<string | null>((get) => {
  const user = get(userAtomLoadable);
  if (user.state === 'hasData') return user.data?.uid ?? null;
  return null;
});

// orderCollectionをリアルタイムで取得する関数
export const fetchOrderCollection = (uid: string, setData: (data: orderCollection[]) => void) => {
  const q = query(collection(db, 'shop_user', uid, 'orderCollection'));

  // 初回データ取得とリアルタイム更新
  onSnapshot(q, async (snapshot) => {
    const changes = snapshot.docChanges();
    const updatedData: orderCollection[] = [];

    for (const change of changes) {
      const docSnapshot = change.doc;
      const data = docSnapshot.data();

      if (change.type === 'added' || change.type === 'modified') {
        // orderのデータを取得する関数
        const fetchOrder = async (): Promise<order[]> => {
          const orderRef = query(collection(db, 'shop_user', uid, 'orderCollection', docSnapshot.id, 'order'));
          const orderSnapshot = await getDocs(orderRef);

          const orderData: order[] = await Promise.all(
            orderSnapshot.docs.map(async (orderDoc): Promise<order> => {
              const orderData = orderDoc.data();
              const itemRef = orderData.item;
              const itemDoc = await getDoc(itemRef);

              const item = async (): Promise<items> => {
                const itemData = itemDoc.data() as DocumentData;
                const optionsCollectionRef = collection(itemRef, 'options'); // 'options' コレクションを取得

                // 'options' コレクション内の全ドキュメントを取得
                const optionsSnapshot = await getDocs(optionsCollectionRef);
                const optionData: options[] = optionsSnapshot.docs.map((optionDoc) => {
                  const docData = optionDoc.data();
                  return {
                    id: optionDoc.id,
                    name: docData?.name as string,
                    price: docData?.price as number,
                  };
                });

                return {
                  id: itemDoc.id,
                  name: itemData.name,
                  price: itemData.price,
                  visible: itemData.visible,
                  category_id: itemData.category_id,
                  options: optionData,
                  imgUrl: itemData.imgUrl,
                };
              };

              const optionData: options[] = await Promise.all(
                orderData.options.map(async (optionRef: CollectionReference) => {
                  // コレクション内の全てのドキュメントを取得
                  const querySnapshot = await getDocs(optionRef);
                  const options: options[] = [];

                  console.log('optionRef:', optionRef); // これでオプションが正しい型かを確認

                  // 取得した各ドキュメントに対してデータを処理
                  querySnapshot.forEach((doc) => {
                    if (doc.exists()) {
                      const docData = doc.data();
                      options.push({
                        id: doc.id,
                        name: docData?.name as string,
                        price: docData?.price as number,
                      });
                    }
                  });

                  // コレクション内にドキュメントがない場合の処理
                  return options.length > 0 ? options : [{ id: null, name: null, price: null }];
                }),
              );

              return {
                id: orderDoc.id,
                item: await item(),
                options: optionData,
                qty: orderData.qty,
              };
            }),
          );

          return orderData;
        };

        const orderData = await fetchOrder();

        updatedData.push({
          id: docSnapshot.id,
          order: orderData,
          timestamp: data.timestamp,
          accounting: data.accounting,
          cooking: data.cooking,
          offer: data.offer,
        });
      } else if (change.type === 'removed') {
        updatedData.push({
          id: docSnapshot.id,
          order: [],
          timestamp: data.timestamp,
          accounting: data.accounting,
          cooking: data.cooking,
          offer: data.offer,
        });
      }
    }

    setData(updatedData);
  });
};

// orderCollectionAtomをリアルタイムデータで更新する
export const orderCollectionAtom = loadable(
  atom(async (get) => {
    const user = get(uidAtom);
    if (!user) return []; // ユーザーが存在しない場合は空配列を返す

    // 非同期処理でデータを取得
    const data = await new Promise<orderCollection[]>((resolve) => {
      fetchOrderCollection(user, (fetchedData) => {
        resolve(fetchedData);
      });
    });

    return data;
  }),
);

// 単一のorderを取得する非同期関数
export const fetchOrder = async (uid: string, docSnapshot: QueryDocumentSnapshot<DocumentData>): Promise<order[]> => {
  const orderRef = query(collection(db, 'shop_user', uid, 'orderCollection', docSnapshot.id, 'order'));
  const orderSnapshot = await getDocs(orderRef);

  const orderData: order[] = await Promise.all(
    orderSnapshot.docs.map(async (orderDoc): Promise<order> => {
      const orderData = orderDoc.data();
      const itemRef = orderData.item;
      const itemDoc = await getDoc(itemRef);

      const item = async (): Promise<items> => {
        const itemData = itemDoc.data() as DocumentData;
        const optionsArray = itemData.options ?? [];

        const optionData: options[] = await Promise.all(
          optionsArray.map(async (colRef: DocumentReference) => {
            const optionDoc = await getDoc(colRef);
            if (optionDoc.exists()) {
              const docData = optionDoc.data();
              return {
                id: optionDoc.id,
                name: docData?.name as string,
                price: docData?.price as number,
              };
            }
            return { id: null, name: null, price: null };
          }),
        );

        return {
          id: itemDoc.id,
          name: itemData.name,
          price: itemData.price,
          visible: itemData.visible,
          category_id: itemData.category_id,
          options: optionData,
          imgUrl: itemData.imgUrl,
        };
      };

      const optionData: options[] = await Promise.all(
        orderData.options.map(async (optionRef: DocumentReference) => {
          const optionDoc = await getDoc(optionRef);
          if (optionDoc.exists()) {
            return optionDoc.data() as options;
          }
          return { id: null, name: null, price: null };
        }),
      );

      return {
        id: orderDoc.id,
        item: await item(),
        options: optionData,
        qty: orderData.qty,
      };
    }),
  );

  return orderData;
};
