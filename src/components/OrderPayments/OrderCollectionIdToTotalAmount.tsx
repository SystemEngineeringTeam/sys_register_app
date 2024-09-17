import { collection, type DocumentData, type DocumentReference, getDoc, getDocs, query } from 'firebase/firestore';
// eslint-disable-next-line unused-imports/no-unused-imports, @typescript-eslint/no-unused-vars
import type React from 'react';
// eslint-disable-next-line no-restricted-imports
import { db } from '../../firebase/firebase';
// eslint-disable-next-line no-restricted-imports
import { type items, type options, type order } from '../../types';

interface OrderCollectionIdToTotalAmountProps {
  orderCollectionId: string;
}
// eslint-disable-next-line consistent-return
export const OrderCollectionIdToTotalAmount = async ({ orderCollectionId }: OrderCollectionIdToTotalAmountProps) => {
  try {
    const q = query(collection(db, 'orderCollection', orderCollectionId, 'order'));
    const orderRef = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
    const orderData: order[] = await Promise.all(
      orderRef.docs.map(async (orderDoc): Promise<order> => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const orderData = orderDoc.data();

        const itemRef = orderData.item;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const itemDoc = await getDoc(itemRef);

        const item = async (): Promise<items> => {
          const itemData = itemDoc.data() as DocumentData;

          // optionsが存在するかどうかチェック
          const optionsArray = itemData.options ?? [];

          const optionData: options[] = await Promise.all(
            optionsArray.map(async (optionRef: DocumentReference) => {
              try {
                const optionSnap = await getDoc(optionRef);

                if (optionSnap.exists()) {
                  // eslint-disable-next-line no-console
                  console.log('Document data:', optionSnap.data());
                  return optionSnap.data() as options;
                }
                // eslint-disable-next-line no-console
                console.log('No such document!');
                return {
                  id: null,
                  name: null,
                  price: null,
                };
              } catch (error) {
                console.error('Error fetching document:', error);
                return {
                  id: null,
                  name: null,
                  price: null,
                };
              }
            }),
          );
          return {
            id: itemDoc.id,
            name: itemData.name,
            price: itemData.price,
            visible: itemData.visible,
            category_id: itemData.category_id,
            options: optionData,
          };
        };

        const optionData: options[] = await Promise.all(
          orderData.options.map(async (optionRef: DocumentReference) => {
            const optionDoc = await getDoc(optionRef);

            if (optionDoc.exists()) {
              // eslint-disable-next-line no-console
              console.log('Document data:', optionDoc.data());
              return optionDoc.data() as options;
            }
            // eslint-disable-next-line no-console
            console.log('No such document!');
            return {
              id: null,
              name: null,
              price: null,
            };
          }),
        );
        return {
          id: orderDoc.id,
          item: await item(),
          options: optionData,
          qty: orderData.qty,
        };
      }),
    );
    //  ここからtotalAmountを出すための記述
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const orders = orderData;
    let totalAmount = 0;
    // eslint-disable-next-line array-callback-return
    orders.map((order) => {
      let optionTotalAmount = 0;
      // 一つのorderの合計金額を計算
      // eslint-disable-next-line @typescript-eslint/no-shadow, array-callback-return
      order.options.map((option) => {
        optionTotalAmount += option.price;
      });
      totalAmount += order.item.price * order.qty + optionTotalAmount * order.qty;
    });
    return totalAmount;
  } catch (error) {
    return -1;
  }
};

// export default OrderCollectionIdToTotalAmount;
