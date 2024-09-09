import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { atom, useAtom } from 'jotai';
import { db } from './firebase';
import { items, options, order, orderCollection, UpdateOrder, options_id, money } from '../types/index';
import { loadable } from 'jotai/utils';
import { userAtomLoadable } from '../login/AdminLogin';

// Firebaseのエラーを判定する関数
function isFirebaseError(err: unknown): err is { code: string; message: string } {
  return typeof err === 'object' && err !== null && 'code' in err;
}

// userAtom(userAtomLoadable) に変化があった場合に uidAtom が再評価される
const uidAtom = atom<string | null>((get) => {
  const user = get(userAtomLoadable);

  if (user.state === 'hasData') return user.data?.uid ?? null;

  return null;
});

// orderCollectionのデータをリアルタイムで取得する関数
export const fetchOrderCollection = (uid: string, callback: (data: orderCollection[]) => void) => {
  const q = query(collection(db, 'shop_user', uid, 'orderCollection'));
  
  onSnapshot(q, async (snapshot) => {
    const orderCollectionData: orderCollection[] = await Promise.all(
      snapshot.docChanges().map(async (change) => {
        const docSnapshot = change.doc;
        const data = docSnapshot.data();

        // orderのデータを取得
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

                // optionsが存在するかどうかチェック
                const optionsArray = itemData.options ?? [];
                const optionData: options[] = await Promise.all(
                  optionsArray.map(async (optionRef: DocumentReference) => {
                    try {
                      const optionSnap = await getDoc(optionRef);

                      if (optionSnap.exists()) {
                        return optionSnap.data() as options;
                      } else {
                        return {
                          id: null,
                          name: null,
                          price: null,
                        };
                      }
                    } catch (error) {
                      console.error('Error fetching document:', error);
                      return {
                        id: null,
                        name: null,
                        price: null,
                      };
                    }
                  })
                );

                return {
                  id: itemDoc.id,
                  name: itemData.name,
                  price: itemData.price,
                  visible: itemData.visible,
                  category_id: itemData.category_id,
                  options: optionData,
                };
              };

              const optionData: options[] = await Promise.all(
                orderData.options.map(async (optionRef: DocumentReference) => {
                  const optionDoc = await getDoc(optionRef);

                  if (optionDoc.exists()) {
                    return optionDoc.data() as options;
                  } else {
                    return {
                      id: null,
                      name: null,
                      price: null,
                    };
                  }
                })
              );

              return {
                id: orderDoc.id,
                item: await item(),
                options: optionData,
                qty: orderData.qty,
              };
            })
          );

          return orderData;
        };

        const orderData = await fetchOrder();

        return {
          id: docSnapshot.id,
          order: orderData,
          timestamp: data.timestamp,
          accounting: data.accounting,
          cooking: data.cooking,
          offer: data.offer,
        };
      })
    );

    callback(orderCollectionData);
  });
};

// orderCollectionAtomをリアルタイムデータで更新する
export const orderCollectionAtom = loadable(
  atom((get) => {
    const user = get(uidAtom);
    if (!user) return null;

    let data: orderCollection[] | null = null;
    fetchOrderCollection(user, (newData) => (data = newData));
    return data;
  })
);
// moneyのデータをリアルタイムで取得する関数
export const fetchMoney = (uid: string, callback: (data: money[]) => void) => {
  const q = query(collection(db, 'shop_user', uid, 'mony'));
  
  onSnapshot(q, (snapshot) => {
    const MoneyData: money[] = snapshot.docChanges().map((change) => {
      const doc = change.doc;
      const data = doc.data();
      
      return {
        date: Number(doc.id),
        '10000': data['10000円'],
        '5000': data['5000円'],
        '1000': data['1000円'],
        '500': data['500円'],
        '100': data['100円'],
        '50': data['50円'],
        '10': data['10円'],
        '5': data['5円'],
        '1': data['1円'],
        total: data.total,
      };
    });

    callback(MoneyData);
  }, (err) => {
    if (isFirebaseError(err)) {
      console.error('Firestore Error:', err);
    } else {
      console.error('一般的なエラー', err);
    }
  });
};

// moneyAtomをリアルタイムデータで更新する
export const moneyAtom = loadable(
  atom((get) => {
    const user = get(uidAtom);
    if (!user) return null;

    let data: money[] | null = null;
    fetchMoney(user, (newData) => (data = newData));
    return data;
  })
);
