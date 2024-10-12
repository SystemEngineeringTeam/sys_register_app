import { Box } from '@mui/material';
import { useState } from 'react';
import ScreenChengeButton from './ScreenChengeButton';
import CategoryBar from './CategoryBar';
import { getCategory } from '@/firebase/useCategory';
import CollectedItemOverview from './CollectedItemOverview';
import { getItems } from '@/firebase/useItems';
import ScreenChengeRegister from './ScreenChengeRegister';
import { money } from '@/types';
import { useLocation } from 'react-router-dom';
import { updateMoney } from '@/firebase/useMoney';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/login/AdminLogin';

const MenuCheck = () => {
  interface State {
    registerMoney?: money;
  }

  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const location = useLocation();
  const { state } = location as { state: State };
  console.log('updateMoney?', state?.registerMoney);
  if (state?.registerMoney !== undefined) {
    updateMoney(state?.registerMoney, user);
    console.log('updateMoney!');
  }
  const categorysObject = getCategory(user);
  // console.log('🚀 ~ MenuCheck ~ categorysObject:', categorysObject);
  // console.log('🚀 ~ MenuCheck ~ categorysObject:', categorysObject.category);
  const [selectCategoryId, setSelectcategoryId] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectAdd, setSelectAdd] = useState('add');
  // const [selectEdit, setSelectEdit] = useState('edit');
  const allItems = getItems(user);
  return (
    <Box>
      <Box sx={{ margin: '1.5rem' }}>
        {/* カテゴリー編集、商品追加ボタン */}
        <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-evenly' }}>
          {/* カテゴリー追加ボタン */}
          <ScreenChengeButton selectAdd={selectAdd} text="カテゴリー編集" themeColor="categoryEdit" />
          {/* 商品追加ボタン */}
          <ScreenChengeButton
            selectAdd={selectAdd}
            text="商品追加"
            themeColor="addItem"
            categorys={categorysObject?.category}
          />
          <ScreenChengeRegister selectAdd={selectAdd} text="釣り銭管理" />
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
            <CollectedItemOverview
              allItems={allItems}
              selectCategoryId={selectCategoryId}
              categorys={categorysObject.category}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuCheck;
