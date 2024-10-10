import { userAtom } from '@/login/AdminLogin';
import { type category, type categoryData } from '@/types';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  type PartialWithFieldValue,
  type QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { db } from './firebase';

function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

// カテゴリーのデータをリアルタイムで取得する関数

export const getCategory = () => {
  const [category, setCategory] = useState<category[]>([]);

  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const colRef = collection(db, 'shop_user', user.uid, 'category').withConverter(converter<category>());

  useEffect(() => {
    const unsb = onSnapshot(colRef, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();

        const newData: category = {
          id: docSnapshot.id,
          name: Docdata.name as string,
        };

        // 追加時
        if (change.type === 'added') {
          setCategory((prevCategory) => [...(prevCategory || []), newData]);
        }

        // 変更時
        if (change.type === 'modified') {
          setCategory((prevCategory) => {
            if (!prevCategory) return prevCategory;
            return prevCategory.map((category) => {
              if (category.id === docSnapshot.id) {
                return newData;
              }
              return category;
            });
          });
        }

        // 削除時
        if (change.type === 'removed') {
          setCategory((prevCategory) => {
            if (!prevCategory) return prevCategory;
            return prevCategory.filter((category) => category.id !== docSnapshot.id);
          });
        }
      });
    });
    console.log('categoryChange');

    return () => {
      unsb();
    };
  }, []);

  return { category };
};

// 新規作成または追加する関数
export const setCategoty = async (data: categoryData) => {
  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  const colRef = collection(db, 'shop_user', user.uid, 'category').withConverter(converter<category>());

  await addDoc(colRef, data);

  console.log('category added');
};

// 更新する関数
export const updateCategory = async (newCategory: category) => {
  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  const data = {
    name: newCategory.name,
  };
  const colRef = doc(db, 'shop_user', user.uid, 'category').withConverter(converter<category>());

  await setDoc(doc(colRef, newCategory.id), data);
  console.log('category updated');
};

// 削除する関数
export const deleteCategory = async (categoryId: string) => {
  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  await deleteDoc(doc(db, 'shop_user', user.uid, 'category', categoryId));
  console.log('category deleted');

  console.log("🚀 ~ deleteCategory ~ db:", db)
  console.log("🚀 ~ deleteCategory ~ uid:", user.uid)
  console.log("🚀 ~ deleteCategory ~ categoryId:", categoryId)
};
  
  
  
