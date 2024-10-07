import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
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
import ItemOptions from '../OrderPayments/ItemOptions';
import { type options } from '@/types';
import { useState } from 'react';
import InputFileUpload from '../Image/upload/InputFileUpload';

const MenuEdit = () => {
  const options: options[] = [
    {
      id: '1',
      name: '塩',
      price: 100,
    },
    {
      id: '2',
      name: 'ケチャップ',
      price: 0,
    },
  ];

  // 商品名
  const [itemName, setItemName] = useState('');
  // 商品の値段
  const [ItemPrice, setItemPrice] = useState(0);
  // オプション
  const [option, setOption] = useState(options);

  // itemNameのEdit
  const handleNameChange = () => {
    // ここで商品名の変更popupを出す
    setItemName('商品名');
  };

  // priceのEdit
  const handlePriceChange = () => {
    // ここで値段の変更popupを出す
    setItemPrice(100);
  };
  // optionを追加
  const handleOptionChange = () => {
    // ここでオプションの変更popupを出す
    setOption(options);
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
              </Box>
            </Stack>
          </Box>
          {/* 値段 */}
          <Box>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Box>値段</Box>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box> ￥{ItemPrice}</Box>
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
                  <ItemOptions options={options} />
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
                    value={category}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    value={display}
                  >
                    <MenuItem value={10}>販売中</MenuItem>
                    <MenuItem value={20}>休止中</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <InputFileUpload />
        </Stack>
      </Box>
    </div>
  );
};
export default MenuEdit;
