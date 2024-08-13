import { collection, getDocs } from 'firebase/firestore';
import { atom } from 'jotai';
import { db } from './firebase';
import { items, options, order } from '../types/index';
import { loadable } from 'jotai/utils';

// firebaseのエラーを判定する関数
// 型ガードを使用する
function isFirebaseError(err: unknown): err is { code: string; message: string } {
  return typeof err === 'object' && err !== null && 'code' in err;
}

// データを取得する関数

// orderのデータを取得する関数
export const fetchOrder = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'order'));

    const OrderData: order[] = querySnapshot.docs.map((doc): order => {
      const data = doc.data();
      return {
        // idはdocに含まれているので、doc.idを使用
        id: doc.id, // 必要なプロパティを明示的に指定
        items_id: data.items_id,
        timestamp: data.timestmp,
        accounting: data.accounting,
        cooking: data.cooking,
        offer: data.offer,
        // 他のプロパティも必要に応じて追加
      };
    });

    return OrderData;
  } catch (err) {
    // エラー処理
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
