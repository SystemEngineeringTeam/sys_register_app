import {
  collection,
  doc,
  DocumentChange,
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { atom } from 'jotai';
import { db } from './firebase';
import { items, options, order, orderCollection, money } from '../types/index';
import { loadable } from 'jotai/utils';
import { userAtomLoadable } from '../login/AdminLogin';

// Firebaseのエラーを判定する関数
// function isFirebaseError(err: unknown): err is { code: string; message: string } {
//   return typeof err === 'object' && err !== null && 'code' in err;
// }

// userAtom(userAtomLoadable) に変化があった場合に uidAtom が再評価される
const uidAtom = atom<string | null>((get) => {
  const user = get(userAtomLoadable);
  if (user.state === 'hasData') return user.data?.uid ?? null;
  return null;
});

// orderCollection のデータをリアルタイムで取得する関数
export const fetchOrderCollection = (uid: string, setData: (data: orderCollection[]) => void) => {
  const q = query(collection(db, 'shop_user', uid, 'orderCollection'));

  // 初回データ取得とリアルタイム更新
  onSnapshot(q, async (snapshot) => {
    const changes = snapshot.docChanges();
    console.log('Changes detected:', changes);
    if (changes.length === 0) {
      console.log('No changes detected');
    }
    const updatedData: orderCollection[] = [];

    for (const change of changes) {
      const docSnapshot = change.doc;
      const data = docSnapshot.data();

      if (change.type === 'added' || change.type === 'modified') {
        // order のデータを取得
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
                const optionsArray = itemData.options ?? [];
                const optionData: options[] = await Promise.all(
                  optionsArray.map(async (optionRef: DocumentReference) => {
                    const optionSnap = await getDoc(optionRef);
                    if (optionSnap.exists()) {
                      return optionSnap.data() as options;
                    } else {
                      return { id: null, name: null, price: null };
                    }
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
                  } else {
                    return { id: null, name: null, price: null };
                  }
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

// orderCollectionAtom をリアルタイムデータで更新する
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

export const fetchOrder = async (
  uid: string,
  docSnapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
): Promise<order[]> => {
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
          optionsArray.map(async (optionRef: DocumentReference) => {
            const optionSnap = await getDoc(optionRef);
            if (optionSnap.exists()) {
              return optionSnap.data() as options;
            } else {
              return { id: null, name: null, price: null };
            }
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
          } else {
            return { id: null, name: null, price: null };
          }
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
