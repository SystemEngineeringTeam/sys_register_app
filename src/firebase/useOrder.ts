import { userAtom } from '@/login/AdminLogin';
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { Data, type order } from '../types/index';
import { db } from './firebase';

export const updateOrder = async (orderCollectionId: string, orders: order[]) => {
  console.log('Updating order' + 'orderCollectionId:' + orderCollectionId + 'orders:' + orders);

  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  console.log('Updating order' + 'orderCollectionId:' + orderCollectionId + 'orders:' + orders);

  const cartData = orders.map((order) => {
    const orderData = createOrderData(
      order.item.id,
      order.options.map((option) => option.id),
      order.qty,
    );

    return orderData;
  });

  const colRef = doc(db, 'shop_user', user.uid, 'orderCollection', orderCollectionId, 'order');

  try {
    await setDoc(colRef, cartData);
    console.log('Updated order');
  } catch (error) {
    console.error('Failed to update order:', error);
    throw new Error('Failed to update order');
  }
};

export const createOrderData = (itemId: string, optionId: string[], qty: number) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const itemRef = collection(db, 'shop_user', user.uid, 'item', itemId);

  const optionsRef = optionId.map((id) => {
    return collection(db, 'shop_user', user.uid, 'options', id);
  });

  const orderData: Data = {
    item: itemRef,
    options: optionsRef,
    qty,
  };

  return orderData;
};
