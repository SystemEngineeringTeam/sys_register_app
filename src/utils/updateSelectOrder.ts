import { type order } from '@/types';

export const updateOrderData = (newOrderData: order[], newOrder: order | undefined, setNewOrderData: any) => {
  console.log('newOrderData!!:', newOrderData);

  // newOrderと一致するorderをnewOrderDataから探す
  const newOrderID = newOrderData.findIndex((order) => order.id === newOrder?.id);

  // newOrderの型安全を保証
  try {
    if (newOrder === undefined) {
      console.error('newOrderがundefinedです');
      return;
    }
  } catch (e) {
    console.error('newOrderの型が不正です');
    return;
  }

  // newOrderDataのnewOrderID番目をnewOrderに更新
  const setOrderData = (newOrderData[newOrderID] = newOrder);

  // newOrderDataを更新
  setNewOrderData(setOrderData);
  console.log('newOrderData!!!%^:', setOrderData);
  console.log('newOrderData!!698759!:', newOrderData);
};
