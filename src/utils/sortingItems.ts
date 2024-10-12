import { getItems } from '@/firebase/useItems';
import { userAtom } from '@/login/AdminLogin';
import { useAtom, useAtomValue } from 'jotai';

export const sortingItems = (id: string) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }
  const itemsArray = getItems(user);

  console.log('sortingItems');
  console.log('itemArray:', itemsArray);

  try {
    if (itemsArray === undefined) {
      throw new Error('itemArray is not found');
    } else {
      console.log('itemArrayGet');
    }
  } catch (error) {
    console.log(error);
  }

  // idが一致するitemを取得
  const item = itemsArray?.find((item) => item.id === id);

  const itemOptId = item?.options.map((option) => option.id);

  // undefinedの場合の処理
  try {
    if (item === undefined) {
      throw new Error('item is not found');
    } else {
      console.log('itemGet');
      console.log(
        `itemOptId:${itemOptId?.map((option) => {
          console.log(option);
        })}`,
      );

      return item;
    }
  } catch (error) {
    console.log(error);
  }
};
