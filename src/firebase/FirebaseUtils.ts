import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { atom } from 'jotai';
import { db } from './firebase';
import { items, options, order, orderCollection, UpdateOrder } from '../types/index';
import { loadable } from 'jotai/utils';
import { ref } from 'firebase/storage';

// firebaseのエラーを判定する関数
// 型ガードを使用する
function isFirebaseError(err: unknown): err is { code: string; message: string } {
  return typeof err === 'object' && err !== null && 'code' in err;
}

// データを取得する関数

// 会計前の注文データを取得する関数
export const fetchReservationOrder = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'order'));
    
        const OrderData: order[] = querySnapshot.docs.map((doc): order => {
        const data = doc.data();
        return {
            id: doc.id,
            item: data.item,
            options: data.options,
            qty: data.qty,
        };
        });
    
        return OrderData;
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

// orderCollectionのデータを取得する関数
export const fetchOrderCollection = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'orderCollection'));

        const orderCollectionData: orderCollection[] = await Promise.all(
            querySnapshot.docs.map(async (doc): Promise<orderCollection> => {
                const data = doc.data();

                const order: order[] = await Promise.all(
                    data.order.map(async (o): Promise<order> => {
                        try {
                            const itemRef = o.item;
                            const itemDoc = await getDoc(itemRef);
                            const itemData = itemDoc.data();

                            const options = await Promise.all(
                                o.options.map(async (opt): Promise<options> => {
                                    const optionsDoc = await getDoc(opt);
                                    const optionsData = optionsDoc.data();

                                    if (optionsData.exists()) {
                                        return {
                                            id: optionsData.id,
                                            name: optionsData.name,
                                            price: optionsData.price,
                                        };
                                      } else {
                                        // docSnap.data() will be undefined in this case
                                        console.log("No such document!");
                                      }

                                })
                            );

                            return {
                                id: o.id,
                                item: itemData,
                                options: options,
                                qty: o.qty,
                            };
                        } catch (err) {
                            if (isFirebaseError(err)) {
                                console.error('Firestore Error:', err);
                            } else {
                                console.error('一般的なエラー', err);
                            }
                            throw err; // エラーが発生した場合は、外側のcatchに伝播させるために再スローします
                        }
                    })
                );

                return {
                    id: doc.id,
                    order: order,
                    timestamp: data.timestamp,
                    accounting: data.accounting,
                    cooking: data.cooking,
                    offer: data.offer,
                };
            })
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

export const orderCollectionAtom = loadable(atom(async () => await fetchOrderCollection()));

// itemsのデータを取得する関数
export const fetchItems = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'item'));
    
        const ItemsData: items[] = querySnapshot.docs.map((doc): items => {
        const data = doc.data();
        return {
            id: doc.id,
            user_id: data.user_id,
            name: data.name,
            price: data.price,
            visible: data.visible,
            category_id: data.category_id,
            options_id: data.opthons_id,
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
        const querySnapshot = await getDocs(collection(db, 'opthons'));
    
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


// orderのデータを更新する関数

export const updateOrder = async (id: string, data: UpdateOrder) => {
    try {

      await updateDoc(doc(db, 'order', id), {'items_id': data.items_id});  

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
}

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
}
