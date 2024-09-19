import { collection, getDocs, onSnapshot, PartialWithFieldValue, QueryDocumentSnapshot } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { useState, useEffect } from 'react';
import { userAtom } from '../login/AdminLogin';
import { orderCollection } from '../types';
import { db } from './firebase';
import { fetchOrder } from './FirebaseUtils';

// ref: https://stackoverflow.com/questions/74486413
function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

export function useOrderCollection() {
  const user = useAtomValue(userAtom);
  // TODO (@SatooRu65536):
  // - 良い感じの Atom にする
  // - Writable Derived Atom を使って単一のドキュメントを更新する
  const [data, setData] = useState<orderCollection[]>();

  if (user === null) {
    throw new Error('User is not logged in');
  }

  const colRef = collection(db, 'shop_user', user.uid, 'orderCollection').withConverter(converter<orderCollection>());

  // async function getOnce() {
  //   const docSnap = await getDocs(colRef);
  //   const data = docSnap.docs.map((doc) => doc.data());
  //   console.log({ data });
  //   return data;
  // }

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      const uid = user.uid;
      // const newData = snapshot.docs.map((doc) => doc.data() as orderCollection);

      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();
        const orderData = await fetchOrder(uid, docSnapshot);

        const newData: orderCollection = {
          id: docSnapshot.id,
          order: orderData,
          timestamp: Docdata.timestamp as number,
          accounting: Docdata.accounting as boolean,
          cooking: Docdata.cooking as boolean,
          offer: Docdata.offer as boolean,
        };

        // 追加時
        if (change.type === 'added') {
          setData((prevData) => [...(prevData || []), newData]);
        }

        // 修正（更新時）
        if (change.type === 'modified') {
          setData((prevData) => {
            if (prevData) {
              return prevData.map((data) => {
                if (data.id === docSnapshot.id) {
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
          setData((prevData) => {
            if (prevData) {
              return prevData.filter((data) => data.id !== docSnapshot.id);
            }
            return prevData;
          });
        }
      });
    });

    console.log('Changed!!!');
    // const newData = snapshot.docs.map((doc) => doc.data() as orderCollection);
    // setData(newData);
    return () => {
      unsub();
    };
  }, []);

  return {
    data,
    setData,
    // getOnce,
  };
}
