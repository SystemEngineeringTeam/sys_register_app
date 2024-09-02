import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { atom, useAtom } from 'jotai';
import { db } from './firebase';
import { items, options, order, orderCollection, UpdateOrder, options_id } from '../types/index';
import { loadable } from 'jotai/utils';
import {userAtomLoadable } from '../login/AdminLogin';  // userAtomのインポート位置を確認する

// firebaseのエラーを判定する関数
function isFirebaseError(err: unknown): err is { code: string; message: string } {
  return typeof err === 'object' && err !== null && 'code' in err;
}

// userAtom(userAtomLoadable) に変化があった場合に uidAtom が再評価される
const uidAtom = atom<string | null>((get) => {
  const user = get(userAtomLoadable);

  if (user.state === "hasData") return user.data?.uid ?? null;

  return null;
});

export const fetchOrderCollection = async (uid:string) => {
  try {
    const q = query(collection(db, 'shop_user', uid, 'orderCollection'));
    const querySnapshot = await getDocs(q);

    const orderCollectionData: orderCollection[] = await Promise.all(
      querySnapshot.docs.map(async (docSnapshot): Promise<orderCollection> => {
        const data = docSnapshot.data();

        // orderのデータを取得
        const fetchOrder = async (): Promise<order[]> => {
          const orderRef = await getDocs(collection(db, 'shop_user',uid,'orderCollection', docSnapshot.id, 'order'));

          const orderData: order[] = await Promise.all(
            orderRef.docs.map(async (orderDoc): Promise<order> => {
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
                        console.log('Document data:', optionSnap.data());
                        return optionSnap.data() as options;
                      } else {
                        console.log('No such document!');
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
                  }),
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
                    console.log('Document data:', optionDoc.data());
                    return optionDoc.data() as options;
                  } else {
                    console.log('No such document!');
                    return {
                      id: null,
                      name: null,
                      price: null,
                    };
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

        return {
          id: docSnapshot.id,
          order: orderData,
          timestamp: data.timestamp,
          accounting: data.accounting,
          cooking: data.cooking,
          offer: data.offer,
        };
      }),
    );

    return orderCollectionData;
  } catch (err) {
    if (isFirebaseError(err)) {
      console.error('Firestore Error:', err);
    } else {
      console.error('一般的なエラー', err);
    }
  } finally {
    console.log('finally');
  }
};

export const orderCollectionAtom = loadable(atom(async (get) => {
  const user = get(uidAtom);
  if (!user) return null;

  return await fetchOrderCollection(user);
}));


// itemsのデータを取得する関数
export const fetchItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'item'));

    const ItemsData: items[] = querySnapshot.docs.map((doc): items => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        price: data.price,
        visible: data.visible,
        category_id: data.category_id,
        options: data.options,
      };
    });

    return ItemsData;
  } catch (err) {
    if (isFirebaseError(err)) {
      console.error('Firestore Error:', err);
    } else {
      console.error('一般的なエラー', err);
    }
  } finally {
    console.log('finally');
  }
};

export const itemsAtom = loadable(atom(async () => await fetchItems()));

// optionsのデータを取得する関数
export const option = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'options'));

    const OptionsData: options[] = querySnapshot.docs.map((doc): options => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        price: data.price,
      };
    });

    return OptionsData;
  } catch (err) {
    if (isFirebaseError(err)) {
      console.error('Firestore Error:', err);
    } else {
      console.error('一般的なエラー', err);
    }
  } finally {
    console.log('finally');
  }
};

export const optionsAtom = loadable(atom(async () => await option()));

// money

export const money = async () => {
  try {
    await getDocs(collection(db, 'money'));
  } catch (err) {
    if (isFirebaseError(err)) {
      console.error('Firestore Error:', err);
    } else {
      console.error('一般的なエラー', err);
    }
  }
};

// orderのデータを更新する関数

export const updateOrder = async (id: string, data: UpdateOrder) => {
  try {
    await updateDoc(doc(db, 'order', id), { items_id: data.items_id });

    console.log('注文の変更が完了しました');
  } catch (err) {
    if (isFirebaseError(err)) {
      console.error('Firestore Error:', err);
    } else {
      console.error('一般的なエラー', err);
    }
  } finally {
    console.log('finally');
  }
};

// orderのデータを消去する関数

export const deleteOrder = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'order', id));
    console.log('注文の削除が完了しました');
  } catch (err) {
    if (isFirebaseError(err)) {
      console.error('Firestore Error:', err);
    } else {
      console.error('一般的なエラー', err);
    }
  } finally {
    console.log('finally');
  }
};