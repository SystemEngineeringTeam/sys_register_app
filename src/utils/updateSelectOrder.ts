import { order } from '@/types';
import { SetStateAction, useSetAtom } from 'jotai';

export const updateOrderData = (newOrderData: order[], newOrder: order | undefined, setNewOrderData: any) => {
  const newOrderDataCopy = newOrderData.slice();
  const setData = newOrderDataCopy.map((order) => {
    if (newOrder === undefined) {
      console.log('newOrder is undefined');
      return order;
    }
    if (order.item.id === newOrder.item.id) {
      return newOrder;
    } else {
      return order;
    }
  });
  setNewOrderData(setData);
};
