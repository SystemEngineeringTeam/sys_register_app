import { collection, getDocs } from 'firebase/firestore';
import { atom } from 'jotai';
import { db } from './firebase';
import { order } from '../types/index';
import { loadable } from 'jotai/utils';

// firebaseのエラーを判定する関数
// 型ガードを使用する
function isFirebaseError(err: unknown): err is { code: string; message: string } {
  return typeof err === 'object' && err !== null && 'code' in err;
}

// データを取得する関数

export const fetchOrder = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'order'));

    const OrderData: order[] = querySnapshot.docs.map((doc): order => {
      const data = doc.data();
      return {
        id: data.id, // 必要なプロパティを明示的に指定
        items_id: data.items_id,
        timestamp: data.timestamp,
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
