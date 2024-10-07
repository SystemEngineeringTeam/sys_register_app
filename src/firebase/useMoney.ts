import { collection, onSnapshot, type PartialWithFieldValue, type QueryDocumentSnapshot } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { userAtom } from '../login/AdminLogin';
import { type money } from '../types';
import { useEffect, useState } from 'react';
import { db } from './firebase';

// ref: https://stackoverflow.com/questions/74486413
function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

// お金のデータをリアルタイムで取得する関数
export function useMoney() {
  const user = useAtomValue(userAtom);
  // TODO (@SatooRu65536):
  // - 良い感じの Atom にする
  // - Writable Derived Atom を使って単一のドキュメントを更新する
  const [money, setMoney] = useState<money[]>();

  if (user === null) {
    throw new Error('User is not logged in');
  }

  const colRef = collection(db, 'shop_user', user.uid, 'mony').withConverter(converter<money>());

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      // const newData = snapshot.docs.map((doc) => doc.data() as orderCollection);

      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const changeData = docSnapshot.data();

        const newData: money = {
          date: Number(docSnapshot.id),
          '1000': changeData['1000'] as number,
          '5000': changeData['5000'] as number,
          '10000': changeData['10000'] as number,
          '500': changeData['500'] as number,
          '100': changeData['100'] as number,
          '10': changeData['10'] as number,
          '50': changeData['50'] as number,
          '5': changeData['5'] as number,
          '1': changeData['1'] as number,
          total: changeData.total as number,
        };

        // 追加時
        if (change.type === 'added') {
          setMoney((prevData) => {
            if (prevData) {
              return [...prevData, newData];
            }
            return [newData];
          });
        }

        // 修正（更新時）
        if (change.type === 'modified') {
          setMoney((prevData) => {
            if (prevData) {
              return prevData.map((data) => {
                if (data.date === newData.date) {
                  return newData;
                }
                return data;
              });
            }
            return prevData;
          });
        }
        // 完全削除時
        if (change.type === 'removed') {
          setMoney((prevData) => {
            if (prevData) {
              return prevData.filter((data) => data.date !== newData.date);
            }
            return prevData;
          });
        }
      });
    });
    console.log('Changed!!!');

    return () => {
      unsub();
    };
  }, []);

  return {
    money,
    setMoney,
    // getOnce,
  };
}

// money のデータを更新する関数
export const updateMoney = async (newMoney: money) => {
  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  // 現在の日付の00:00:00のミリ秒を取得する
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const milliseconds = todayMidnight.getTime();

  const colRef = collection(db, 'shop_user', user.uid, 'mony').withConverter(converter<money>());

  console.log('money updated');
};
