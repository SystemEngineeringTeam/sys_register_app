import { type order } from '@/types';

export const updateOrderData = (newOrderData: order[], newOrder: order | undefined, setNewOrderData: any) => {
  const newOrderDataCopy = newOrderData.slice();
  const setData = newOrderDataCopy.map((order) => {
    if (newOrder === undefined) {
      console.log('newOrder is undefined');
      return order;
    }
    if (order.item.id === newOrder.item.id) {
      return newOrder;
    }
    return order;
  });
  setNewOrderData(setData);
};

