import { userAtom } from '@/login/AdminLogin';
import { useAtomValue } from 'jotai';
import { db } from './firebase';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  type PartialWithFieldValue,
  type QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore';
import { type items, type itemsData } from '@/types';
import { useEffect, useState } from 'react';
import { useOptions } from './useOptions';

function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

// dataの更新
export const updateItems = async (newData: items) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }
  const data = {
    name: newData.name,
    category_id: newData.category_id,
    price: newData.price,
    visible: newData.visible,
    imgUrl: newData.imgUrl,
  };

  const colRef = collection(db, 'shop_user', user.uid, 'items').withConverter(converter<items>());

  await setDoc(doc(colRef, newData.id), data);

  console.log('updateItems');
};

// 新規作成または追加
export const setItems = async (data: itemsData) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const colRef = collection(db, 'shop_user', user.uid, 'items').withConverter(converter<items>());

  await setDoc(doc(colRef), data);

  console.log('setItems');
};

export const getItems = () => {
  const [items, setItems] = useState<items[] | null>(null);

  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const colRef = collection(db, 'shop_user', user.uid, 'items').withConverter(converter<items>());

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();

        const optionData = useOptions();

        const newData: items = {
          id: docSnapshot.id,
          name: Docdata.name as string,
          category_id: Docdata.category_id as string,
          price: Docdata.price as number,
          visible: Docdata.visible as boolean,
          options: optionData.options,
          imgUrl: Docdata.imgUrl as string,
        };

        // 追加時
        if (change.type === 'added') {
          setItems((prevData) => [...(prevData || []), newData]);
        }

        // 修正（更新時）
        if (change.type === 'modified') {
          setItems((prevData) => {
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
          setItems((prevData) => {
            if (prevData) {
              return prevData.filter((data) => data.id !== docSnapshot.id);
            }
            return prevData;
          });
        }
      });
    });

    return () => {
      unsub();
    };
  }, []);

  console.log('itemChange');
  return {
    items,
  };
};

// itemを消去する関数
export const deleteItems = async (itemId: string) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  await deleteDoc(doc(db, 'shop_user', user.uid, 'items', itemId));

  console.log('deleteItems');
};
