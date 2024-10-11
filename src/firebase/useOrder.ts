import { type User } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  type PartialWithFieldValue,
  type QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore';
import { type Data, type developer, type order } from '../types/index';
import { db } from './firebase';

function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

export const updateOrder = async (orderCollectionId: string, orders: order[], user: User | developer) => {
  try {
    console.log('Updating order with orderCollectionId:', orderCollectionId, 'orders:', orders);

    if (!user) {
      console.log('Error: User is not logged in');
      throw new Error('User is not logged in');
    }

    console.log('User:', user);

    const colRef = collection(db, 'shop_user', user.uid, 'orderCollection', orderCollectionId, 'order').withConverter(
      converter<order>(),
    );

    console.log('colRef:', colRef);

    const orderData = orders.map((order) => {
      console.log('order682u6:', order);
      const createData = createOrderData(
        order.item.id,
        order.options.map((option) => option.id),
        order.qty,
        user,
      );

      console.log('createDataaaaaa:', createData);

      return createData;
    });

    console.log('orderData999528xs:', JSON.stringify(orderData));

    for (const [index, order] of orders.entries()) {
      await setDoc(doc(colRef, order.id), orderData[index]);
      console.log('setDoc:', order.id);
    }

    console.log('updateOrder completed');
  } catch (error) {
    console.error('Error in updateOrder:', error);
  }
};

export const createOrderData = (itemId: string, optionId: string[], qty: number, user: User | developer) => {
  // itemIdを使って、コレクションではなくドキュメント参照を作成
  const itemRef = doc(db, 'shop_user', user.uid, 'item', itemId);

  // optionIdも同様にドキュメント参照を作成
  const optionsRef = optionId.map((id) => {
    return doc(db, 'shop_user', user.uid, 'options', id);
  });

  const orderData: Data = {
    item: itemRef,
    options: optionsRef,
    qty,
  };

  return orderData;
};

export const deleteOrder = async (orderCollectionId: string, orderId: string, user: User | developer) => {
  try {
    if (!user) {
      console.log('Error: User is not logged in');
      throw new Error('User is not logged in');
    }
    const orderDocRef = doc(db, 'shop_user', user.uid, 'orderCollection', orderCollectionId, 'order', orderId);

    await deleteDoc(orderDocRef);
    console.log('deleteOrder completed');
  } catch (error) {
    console.error('Error in deleteOrder:', error);
  }
};
