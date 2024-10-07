import { Box } from '@mui/material';
import CustmizeGraf from './CustmizeGraf';
import CustomizeMenu from './CustomizeMenu';
import { type items, type options, type order } from '@/types';
import { sortingItems } from '@/utils/sortingItems';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { orderAtom } from '@/stores/orderAtom';

interface CustomizeChangeLeftProps {
  selectId: number;
  selectOptions: options[];
  selectMenuqty: number;
  selectMenuId: string;
}

const CustomizeChangeLeft = ({ selectId, selectMenuqty, selectOptions, selectMenuId }: CustomizeChangeLeftProps) => {
  // 選択しているoptionのstate
  const [options, setOptions] = useState<options[]>(selectOptions);

  const setNewOrder = useSetAtom(orderAtom);

  // selectIdからmenuのデータを取得
  const item = sortingItems(selectMenuId);

  const itemName = item?.name ? item.name : '';
  const itemImg = item?.imgUrl ? item.imgUrl : '';

  const itemOption = item?.options ? item.options : [];

  // selectしているoptionのid配列
  const ids = selectOptions.map((option) => option.id);

  // selectしているoptionの配列を作成
  // const options = sortingOption(ids, itemOption);

  // newOrder
  const newOrder: order = {
    id: selectMenuId,
    item: item || ({} as items),
    qty: selectMenuqty,
    options,
  };

  // newOrderを更新
  setNewOrder(newOrder);

  return (
    <div>
      <Box sx={{ ml: '50px' }}>
        <Box>
          <CustomizeMenu itemImg={itemImg} itemName={itemName} />
        </Box>
        <Box sx={{ fontSize: '30px' }}>カスタマイズ</Box>
        <Box>
          {itemOption.map((itemOption: options, index) => {
            return <CustmizeGraf key={index} itemOption={itemOption} options={options} setOptions={setOptions} />;
          })}

        </Box>
      </Box>
    </div>
  );
};

export default CustomizeChangeLeft;
