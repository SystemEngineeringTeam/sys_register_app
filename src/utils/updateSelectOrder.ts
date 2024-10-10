import { type order } from '@/types';

export const updateOrderData = (newOrderData: order[], newOrder: order | undefined, setNewOrderData: any) => {
  console.log('newOrderData!!:', newOrderData);

  // newOrderと一致するorderをnewOrderDataから探す
  const newOrderIndex = newOrderData.findIndex((order) => order.id === newOrder?.id);

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

  // newOrderDataのindex番目をnewOrderに更新して配列に格納
  const setOrderData: order[] = newOrderData.splice(newOrderIndex, 1, newOrder);

  // newOrderDataを更新
  setNewOrderData(setOrderData);
  console.log('setOrderData!!!%^:', setOrderData);
  console.log('newOrderData!!698759!:', newOrderData);
};
