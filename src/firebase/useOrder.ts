import { userAtom } from '@/login/AdminLogin';
import { type order, type orderData } from '@/types';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  type PartialWithFieldValue,
  type QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { db } from './firebase';

function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

// orderを更新する関数
export const updateOrder = async (orderCollectionId: string, newOrder: order) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const data: orderData = {
    item: newOrder.item,
    options: newOrder.options,
    qty: newOrder.qty,
  };

  const orderRef = collection(db, 'shop_user', user.uid, 'orderCollection', orderCollectionId, 'order').withConverter(
    converter<order>(),
  );

  await setDoc(doc(orderRef, newOrder.id), data);
};

// orderの追加
export const addOrder = async (orderCollectionId: string, newOrder: order) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const data: orderData = {
    item: newOrder.item,
    options: newOrder.options,
    qty: newOrder.qty,
  };

  const orderRef = collection(db, 'shop_user', user.uid, 'orderCollection', orderCollectionId, 'order').withConverter(
    converter<order>(),
  );

  await addDoc(orderRef, data);
};

// orderの消去(注文の一部をキャンセル)
export const deleteOrder = async (orderCollectionId: string, orderId: string) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const orderRef = collection(db, 'shop_user', user.uid, 'orderCollection', orderCollectionId, 'order').withConverter(
    converter<order>(),
  );

  await deleteDoc(doc(orderRef, orderId));
};
