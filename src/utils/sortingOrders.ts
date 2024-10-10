import { useOrderCollection } from '../firebase/useOrderCollection';
import { type order, type orderCollection } from '../types';

// IDが一致するorder[]をorderCollectionから取得する関数
export const sortingOrders = (id: number): order[] => {
  const { data } = useOrderCollection();

  if (!data) {
    return [];
  }

  const idToString = id.toString();

  // orderCollectionからIDが一致するorderを取得
  const orders = (data: orderCollection[]): order[] => {
    const order = data.find((orderData) => orderData.id === idToString);
    return order ? order.order : [];
  };

  return orders(data);
};
