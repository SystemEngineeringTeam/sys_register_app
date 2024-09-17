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

// firebaseのところに書き加える内容
export const fetchOrder = async (orderCollectionId: string): Promise<order[]> => {
  const q = query(collection(db, 'orderCollection', orderCollectionId, 'order'));
  const orderRef = await getDocs(q);
  const orderData: order[] = await Promise.all(
    orderRef.docs.map(async (orderDoc): Promise<order> => {
      const orderData = orderDoc.data();

      const itemRef = orderData.item;
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
                console.log('Document data:', optionSnap.data());
                return optionSnap.data() as options;
              }
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
            console.log('Document data:', optionDoc.data());
            return optionDoc.data() as options;
          }
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
  return orderData;
};



export const OrderCollectionIdToTotalAmount = async ({ orderCollectionId }: OrderCollectionIdToTotalAmountProps) => {
  const orders = fetchOrder(orderCollectionId);
  let totalAmount = 0;
  (await orders).map((order: { options: options[]; item: { price: number }; qty: number }) => {
    let optionTotalAmount = 0;
    // 一つのorderの合計金額を計算
    // eslint-disable-next-line @typescript-eslint/no-shadow, array-callback-return
    order.options.map((option: { price: number }) => {
      optionTotalAmount += option.price;
    });
    totalAmount += order.item.price * order.qty + optionTotalAmount * order.qty;
  });
  return totalAmount;
};

// export default OrderCollectionIdToTotalAmount;
