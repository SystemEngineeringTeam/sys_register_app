import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ScreenChengeButton from './ScreenChengeButton';
import CategoryBar from './CategoryBar';
import { type category, type items, type options } from '@/types';
import CollectedItemOverview from './CollectedItemOverview';

const MenuEdit = () => {
  // 仮置きデータ
  const testOption1: options = {
    id: '1',
    name: 'たれ',
    price: 10,
  };
  const testOption2: options = {
    id: '2',
    name: '塩',
    price: 10,
  };
  const testItem1: items = {
    id: '1',
    name: 'testItem1',
    price: 100,
    visible: true,
    category_id: 'foodId',
    options: [testOption1, testOption2],
  };
  const testItem2: items = {
    id: '2',
    name: 'testItem2',
    price: 150,
    visible: true,
    category_id: 'foodId',
    options: [testOption1, testOption2],
  };
  const testItem3: items = {
    id: '3',
    name: 'testItem3',
    price: 200,
    visible: true,
    category_id: 'drinkId',
    options: [],
  };
  const testCategory1: category = {
    id: 'foodId',
    name: 'フード',
  };
  const testCategory2: category = {
    id: 'drinkId',
    name: 'ドリンク',
  };
  const testCategorys: category[] = [testCategory1, testCategory2];
  const allItems: items[] = [testItem1, testItem2, testItem3];
  const [selectCategoryId, setSelectcategoryId] = useState('');
  useEffect(() => {
    setSelectcategoryId(testCategorys[0].id);
  }, []);
  //   ここまでは仮置きデータ

  // category_idが選択中のもののみ表示させたい
  return (
    <Box>
      <Box sx={{ margin: '1.5rem' }}>
        {/* カテゴリー編集、商品追加ボタン */}
        <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-evenly' }}>
          <ScreenChengeButton text="カテゴリー編集" themeColor="categoryEdit" />
          <ScreenChengeButton text="商品追加" themeColor="addItem" />
        </Box>
        {/* カテゴリー遷移バー */}
        <Box sx={{ margin: '0.5rem' }}>
          <CategoryBar
            categorys={testCategorys}
            selectcategoryId={selectCategoryId}
            setSelectcategoryId={setSelectcategoryId}
          />
        </Box>

        <Box>
          {/* 商品概要 */}
          <Box>
            <CollectedItemOverview
              // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
              OverviewItems={allItems.filter((item) => {
                return item.category_id === selectCategoryId;
              })}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuEdit;
