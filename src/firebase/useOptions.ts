import { type options } from '@/types';
import { collection, onSnapshot, type PartialWithFieldValue, type QueryDocumentSnapshot } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import { db } from './firebase';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/login/AdminLogin';

function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

// options のデータをリアルタイムで取得する関数
export const useOptions = () => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }
  const [options, setOptions] = useState<options[]>([]);

  const colRef = collection(db, 'shop_user', user.uid, 'options').withConverter(converter<options>());

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();

        const newData: options = {
          id: docSnapshot.id,
          name: Docdata.name as string,
          price: Docdata.price as number,
        };

        // 追加時
        if (change.type === 'added') {
          setOptions((prevOptions) => [...(prevOptions || []), newData]);
        }
        // 変更時
        if (change.type === 'modified') {
          setOptions((prevOptions) => {
            if (!prevOptions) return prevOptions;
            return prevOptions.map((option) => {
              if (option.id === docSnapshot.id) {
                return newData;
              }
              return option;
            });
          });
        }
        // 削除時
        if (change.type === 'removed') {
          setOptions((prevOptions) => {
            if (!prevOptions) return prevOptions;
            return prevOptions.filter((option) => option.id !== docSnapshot.id);
          });
        }
      });
    });
    console.log('optionsChange');
    return () => {
      unsub();
    };
  }, []);
  return { options };
};

// Optionsを追加する関数

export const addOptions = async (newOption: options) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const data = {
    name: newOption.name,
    price: newOption.price,
  };

  const colRef = collection(db, 'shop_user', user.uid, 'options').withConverter(converter<options>());

  await addDoc(colRef, data);
};

// Optionsを更新する関数
export const updateOptions = async (newOption: options) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const data = {
    name: newOption.name,
    price: newOption.price,
  };

  const colRef = doc(db, 'shop_user', user.uid, 'options').withConverter(converter<options>());

  await setDoc(doc(colRef, newOption.id), data);
};

// Optionsを削除する関数
export const deleteOptions = async (optionId: string) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  await deleteDoc(doc(db, 'shop_user', user.uid, 'options', optionId));

  console.log('options deleted');
};
