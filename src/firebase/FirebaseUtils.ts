import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { atom } from 'jotai';
import { db } from './firebase';
import { items, options, order, UpdateOrder } from '../types/index';
import { loadable } from 'jotai/utils';

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
            items_id: data.items_id,
            user_id: data.user_id,
            status: data.status,
            created_at: data.created_at,
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

export const orderAtom = loadable(atom(async () => await fetchOrder()));

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
