import { userAtom } from '@/login/AdminLogin';
import { doc, updateDoc } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { type order } from '../types/index';
import { db } from './firebase';

interface UpdateOrderProps {
  orderCollectionId: string;
  orders: order[];
}

export const updateOrder = async ({ orderCollectionId, orders }: UpdateOrderProps) => {
  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  const colRef = doc(db, 'shop_user', user.uid, 'orderCollection', orderCollectionId);

  try {
    await updateDoc(colRef, { order: orders });
  } catch (error) {
    console.error('Failed to update order:', error);
    throw new Error('Failed to update order');
  }
};
