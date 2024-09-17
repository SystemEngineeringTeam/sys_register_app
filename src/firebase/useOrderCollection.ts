import { collection, getDocs, onSnapshot, PartialWithFieldValue, QueryDocumentSnapshot } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { useState, useEffect } from 'react';
import { userAtom } from '../login/AdminLogin';
import { orderCollection } from '../types';
import { db } from './firebase';

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

  async function getOnce() {
    const docSnap = await getDocs(colRef);
    const data = docSnap.docs.map((doc) => doc.data());
    console.log({ data });
    return data;
  }

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      console.log('Changed!!!');
      const newData = snapshot.docs.map((doc) => doc.data() as orderCollection);
      setData(newData);
    });

    return () => {
      unsub();
    };
  }, []);

  return {
    data,
    setData,
    getOnce,
  };
}
