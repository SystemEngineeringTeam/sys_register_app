import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Stack,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import ItemOptions from '../OrderPayments/ItemOptions';
import { category, items, type options } from '@/types';
import { useState } from 'react';
import InputFileUpload from '../Image/upload/InputFileUpload';
import { zodResolver } from '@hookform/resolvers/zod';
import AddButton from './AddButton';
import EditButton from './EditButton';
import { useLocation } from 'react-router-dom';
import { getItemNameDuplication } from '@/utils/zodUtils';
import { categoryIdToCategoryName } from '@/utils/CategoryIdToItem';
import { MenuEditSchema, menuEditType } from '@/validations/schema';
import { ZodObject, ZodString, ZodNumber, ZodTypeAny } from 'zod';
import EditPopup from './EditPopup';

// state , statecomponents
interface State {
  state: {
    selectEdit?: string;
    selectAdd?: string;
    item?: items;
    allIitems?: items[];
    categorys?: category[];
  };
}

const MenuEdit = () => {
  const location = useLocation();
  const { state } = location as { state: State };
  // オプション
  const [option, setOption] = useState(state.state.item?.options);
  // ポップアップ表示用
  const [onScreenPopUpItem, setOnScreenPopUpItem] = useState(false);
  const [onScreenPopUpAmount, setOnScreenPopUpAmount] = useState(false);
  const ItemNameBoolean = getItemNameDuplication(state.state.allIitems, state.state.item?.name);
  const [allCategory, setAllCategory] = useState(state.state.categorys);
  // priceのEdit
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
    // // ここで値段の変更popupを出す
    // setOnScreenPopUpAmount(true);
  };
  // カテゴリーの状態
  const [category, setCategory] = useState('');
  // 表示の状態
  const [display, setDisplay] = useState('');

  // カテゴリーの選択
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
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
  // カテゴリーの状態
  const [categoryName, setCategoryName] = useState(
    categoryIdToCategoryName(state.state.categorys, state.state.item?.category_id),
  );
  // カテゴリーの選択
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategoryName(event.target.value);
  };
  // // 商品名 zodでバリテーションチェック済み
  const [itemName, setItemName] = useState(state.state?.item?.name);
  // 商品の値段 zodでバリテーションチェック済み
  const [itemPrice, setItemPrice] = useState(state.state?.item?.price);
  // 販売中かどうか　販売中ならtrue
  const [visible, setVisible] = useState(state.state?.item?.visible);
  // handleSubmitは送信する時に使う 今は未実装
  const {
    control,
    setValue,
    watch,
    formState: { errors, isValid },
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
                <Box> {itemName}</Box>
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
                          isValid={isValid}
                          setItemPrice={setItemPrice}
                          setItemName={setItemName}
                          state={itemName}
                          setValue={setValue}
                          errors={errors}
                          field={field}
                          watch={watch}
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
                <Box> ￥{itemPrice}</Box>
                <IconButton onClick={handlePriceChange}>
                  <EditIcon />
                </IconButton>
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
                    labelId="demo-simple-select-label"
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
                    id="demo-simple-select"
                    label="表示"
                    labelId="demo-simple-select-label"
                    onChange={handleDisplayChange}
                    value={visible ? '販売中' : '休止中'}
                  >
                    <MenuItem value={'休止中'}>休止中</MenuItem>
                    <MenuItem value={'販売中'}>販売中</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Stack>
            <InputFileUpload />

            <Stack direction="row" sx={{ justifyContent: 'right', mr: '7rem' }}>
              <EditButton
                iconClose={iconClose}
                handleClose={handleClose}
                open={open}
                handleOpen={handleOpen}
                selectEdit={state.state?.selectEdit}
                selectAdd={state.state?.selectAdd}
              />
              <AddButton />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
export default MenuEdit;
