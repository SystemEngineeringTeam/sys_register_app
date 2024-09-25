// import { useOrderList } from './OrderList';
import { type orderCollection } from '../types/index';

// export function totalAmount(id: string) {
//   const order = useOrderList();

//   function findItemById(id: string) {
//     return order.data?.find((o) => o.id === id);
//   }

//   const selectOrder = findItemById(id);

//   if (!selectOrder) {
//     return 'No order found';
//   }

//   const total = selectOrder.item.reduce((acc, item) => {
//     const itemPrice = item.price;
//     const optionsPrice = item.options.reduce((acc, opt) => acc + opt.price, 0);
//     return acc + itemPrice + optionsPrice;
//   }, 0);

//   return total;
// }

export function idToTotalAmount(orderCollectionId: string, orderCollections: orderCollection[]) {
  let totalAmount = 0;
  let optionPrices = 0;
  const orderColl = orderCollections.find((oc) => {
    return oc.id === orderCollectionId;
  });
  if (orderColl === undefined) {
    return -1;
  }
  // eslint-disable-next-line array-callback-return
  orderColl.order.map((o) => {
    // eslint-disable-next-line array-callback-return
    o.options.map((op) => {
      optionPrices += op.price;
    });
    totalAmount += (o.item.price + optionPrices) * o.qty;
    optionPrices = 0;
  });
  return totalAmount;
}
