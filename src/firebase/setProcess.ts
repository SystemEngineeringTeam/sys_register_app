import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/login/AdminLogin';
import { db } from './firebase';
import { type orderCollection } from '@/types';

export const useOrderUpdate = () => {
  const user = useAtomValue(userAtom);

  if (user == null) {
    throw new Error('User is not logged in');
  }

  const updateOrderStatus = async (id: string, field: string) => {
    const orderRef = doc(db, 'shop_user', user.uid, 'orderCollection', id);
    const tmpField = field as 'accounting' | 'cooking' | 'offer';
    const docSnap = await getDoc(orderRef);
    const orderData = docSnap.data() as orderCollection;
    const booleanField = orderData[tmpField];
    try {

      await updateDoc(orderRef, {
        [field]: !booleanField,
      });
    } catch (error) {
      console.error(`Failed to update ${field} for order ${id}:`, error);
      throw new Error(`Failed to update ${field} field`);
    }
  };

  return { updateOrderStatus };
};
