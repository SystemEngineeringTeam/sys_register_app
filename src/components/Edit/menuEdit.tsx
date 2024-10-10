import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Stack,
} from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import ItemOptions from '../OrderPayments/ItemOptions';
import { category, type items, type options } from '@/types';
import { useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import InputFileUpload from '../Image/upload/InputFileUpload';

import AddButton from './AddButton';
import EditButton from './EditButton';
import { useLocation } from 'react-router-dom';
import EditPopup from './EditPopup';
import { MenuEditSchema, menuEditType } from '@/validations/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { getItemNameDuplication } from '../../utils/zodUtils';
import { categoryIdToCategoryName } from '@/utils/CategoryIdToItem';

// state , statecomponents
interface State {
  state: {
    item?: items;
    allIitems?: items[];
    categorys?: category[];
  };
}

const MenuEdit = () => {
  const location = useLocation();
  const { state } = location as { state: State };
  // const options: options[] = [
  //   {
  //     id: '1',
  //     name: '塩',
  //     price: 100,
  //   },
  //   {
  //     id: '2',
  //     name: 'ケチャップ',
  //     price: 0,
  //   },
  // ];

  // オプション
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [option, setOption] = useState(state.state.item?.options);
  // ポップアップ表示用
  const [onScreenPopUpItem, setOnScreenPopUpItem] = useState(false);
  const [onScreenPopUpAmount, setOnScreenPopUpAmount] = useState(false);
  // itemNameのEdit
  const handleNameChange = () => {
    // ここで商品名の変更popupを出す
    setItemName('');
    setOnScreenPopUpItem(true);
  };

  // priceのEdit
  const handlePriceChange = () => {
    // setItemPrice(100);
    // ここで値段の変更popupを出す
    setOnScreenPopUpAmount(true);
  };
  // optionを追加
  const handleOptionChange = () => {
    // ここでオプションの変更popupを出す
    // setOption(options);
  };
  // カテゴリーの状態
  const [categoryName, setCategoryName] = useState(
    categoryIdToCategoryName(state.state.categorys, state.state.item?.category_id)
  );
 console.log("catName",categoryName);
  const ItemNameBoolean = getItemNameDuplication(state.state.allIitems, state.state.item?.name);
  const [allCategory, setAllCategory] = useState(state.state.categorys);
  // 表示の状態
  const [display, setDisplay] = useState('');

  // カテゴリーの選択
  const handleChange = (event: SelectChangeEvent) => {
    setCategoryName(event.target.value);
  };
  // 表示の選択
  const handleDisplayChange = (event: SelectChangeEvent) => {
    setDisplay(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {};
  const iconClose = () => {
    setOpen(false);
  };

  // // eslint-disable-next-line no-console
  // console.log('selectAdd', state.state?.selectAdd);
  // // eslint-disable-next-line no-console
  // console.log('selectAdd', state.state?.selectEdit);
  // eslint-disable-next-line no-console
  console.log('item', state.state?.item?.name);
  // // 商品名
  const [itemName, setItemName] = useState(state.state?.item?.name);
  // 商品の値段
  const [itemPrice, setItemPrice] = useState(0);
  const [visible, setVisible] = useState(state.state?.item?.visible);
  const {
    control,
    setValue,
    watch,
    formState: { errors },
    // 保存時の処理
    handleSubmit,
    // リセットしたい時に使う関数
    reset,
  } = useForm<menuEditType>({
    // デフォルトはこれを入れる
    defaultValues: {
      itemName,
      itemPrice,
    },
    // zodのバリテーションチェックをreact-hooks-formと連携
    resolver: zodResolver(MenuEditSchema),
  });

  return (
    <div>
      <Box>
        <Stack divider={<Divider />} spacing={2}>
          {/* 商品名 */}
          <Box>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Box>商品名</Box>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box> {state.state.item?.name}</Box>
                <IconButton onClick={handleNameChange}>
                  <EditIcon />
                </IconButton>
                {onScreenPopUpItem ? (
                  <Controller
                    name="itemName"
                    control={control}
                    render={({ field }) => {
                      return (
                        <EditPopup
                          setValue={setValue}
                          errors={errors}
                          field={field}
                          currentName={`${state.state.item?.name}`}
                          editName="商品名"
                          setOnScreen={setOnScreenPopUpItem}
                        />
                      );
                    }}
                  />
                ) : (
                  <Box />
                )}
              </Box>
            </Stack>
          </Box>
          {/* 値段 */}
          <Box>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Box>値段</Box>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box> ￥{state.state.item?.price}</Box>
                <IconButton onClick={handlePriceChange}>
                  <EditIcon />
                </IconButton>
                {onScreenPopUpAmount ? (
                  // <Controller
                  //   name="itemPrice"
                  //   control={control}
                  //   render={({ field }) => {
                  //     return (
                  //       <EditPopup

                  //         currentName={`${state.state.item?.name}`}
                  //         editName="値段"
                  //         setOnScreen={setOnScreenPopUpItem}
                  //       />
                  //     );
                  //   }}
                  // />
                  <Box />
                ) : (
                  <Box />
                )}
              </Box>
            </Stack>
          </Box>
          {/* オプション */}
          <Box>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Box>オプション</Box>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                  <ItemOptions options={option} />
                </Box>
                <IconButton onClick={handleOptionChange}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
            </Stack>
          </Box>
          {/* カテゴリー */}
          <Box>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Box>カテゴリー</Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', minWidth: 130 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">カテゴリー</InputLabel>
                  <Select
                    id="demo-simple-select"
                    label="カテゴリー"
                    labelId="category-select-label"
                    onChange={handleChange}
                    value={categoryName !== undefined ? categoryName : ''}
                  >
                    {state.state.categorys?.map((categoryElm) => {
                      return (
                        <MenuItem
                          key={categoryElm.id}
                          value={categoryElm.name}
                          onSubmit={(e) => {
                            // setCategoryName(categoryElm.name);
                          }}
                        >
                          {categoryElm.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          {/* 表示 */}
          <Box>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Box>表示</Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', minWidth: 130 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">表示</InputLabel>
                  <Select
                    id="visible-select"
                    label="表示"
                    labelId="visible-select-label"
                    onChange={handleDisplayChange}
                    value={visible ? '販売中' : '休止中'}
                  >
                    <MenuItem value={'休止中'} >
                      休止中
                    </MenuItem>
                    <MenuItem value={'販売中'} >
                      販売中
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Stack>
            <InputFileUpload />

            <Stack direction="row" sx={{ justifyContent: 'right', mr: '7rem' }}>
              {/* <EditButton
                iconClose={iconClose}
                handleClose={handleClose}
                open={open}
                handleOpen={handleOpen}
                state={state.state}
              /> */}
              <AddButton />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
export default MenuEdit;
