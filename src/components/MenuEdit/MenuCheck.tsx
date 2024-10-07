import { Box } from '@mui/material';
import { useState } from 'react';
import ScreenChengeButton from './ScreenChengeButton';
import CategoryBar from './CategoryBar';
import { getCategory } from '@/firebase/useCategory';
// import { getItems } from '@/firebase/useItems';

const MenuCheck = () => {
  const categorysObject = getCategory();
  // firebaseからitemがとってこれない
  // const ItemsObject = getItems();
  const [selectCategoryId, setSelectcategoryId] = useState('');
  // useEffect(() => {
  //   // setSelectcategoryId();

  // }, []);
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
            categorys={categorysObject.category}
            selectcategoryId={selectCategoryId}
            setSelectcategoryId={setSelectcategoryId}
          />
        </Box>

        <Box>
          {/* 商品概要 */}
          <Box>
            {/* <CollectedItemOverview
              // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
              OverviewItems={ItemsObject.items}
            /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuCheck;
