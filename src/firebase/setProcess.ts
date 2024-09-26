import { doc, updateDoc } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { userAtom } from '../login/AdminLogin';
import { db } from './firebase';

export const useOrderUpdate = () => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const updateOrderStatus = async (id: string, field: string) => {
    const orderRef = doc(db, 'shop_user', user.uid, 'orderCollection', id);

    try {
      await updateDoc(orderRef, {
        [field]: true,
      });
      console.log(`${field} field updated successfully for order ${id}`);
    } catch (error) {
      console.error(`Failed to update ${field} for order ${id}:`, error);
      throw new Error(`Failed to update ${field} field`);
    }
  };

  return { updateOrderStatus };
};
