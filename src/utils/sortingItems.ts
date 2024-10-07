import { getItems } from '@/firebase/useItems';

export const sortingItems = (id: string) => {
  const items = getItems();

  console.log('sortingItems', items);

  const itemsArray = items ? items : [];

  // idが一致するitemを取得
  const item = itemsArray.find((item) => item.id === id);

  console.log('itemsArray', itemsArray);
  console.log('id', id);
  console.log('item', item);
  return item ? item : null;
};
