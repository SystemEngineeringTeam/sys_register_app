import { orderAtom } from '@/stores/orderAtom';
import { type items, type options, type order } from '@/types';
import { sortingItems } from '@/utils/sortingItems';
import { Box } from '@mui/material';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import CustmizeGraf from './CustmizeGraf';
import CustomizeMenu from './CustomizeMenu';

interface CustomizeChangeLeftProps {
  selectId: number;
  selectOptions: options[];
  selectMenuqty: number;
  selectMenuId: string;
  selectOrder: order;
}

const CustomizeChangeLeft = ({
  selectId,
  selectMenuqty,
  selectOptions,
  selectMenuId,
  selectOrder,
}: CustomizeChangeLeftProps) => {
  // 選択しているoption
  const [choiceOptions, setChoiceOptions] = useState<options[]>(selectOptions);

  console.log('selectOptions5742682768972368:' + selectOptions);

  const setNewOrder = useSetAtom(orderAtom);

  // selectIdからmenuのデータを取得
  const item = sortingItems(selectMenuId);

  // itemのデータ類
  const itemName = item?.name ? item.name : '';
  const itemImg = item?.imgUrl ? item.imgUrl : '';
  const itemPrice = item?.price ? item.price : 0;
  const itemOption = item?.options ? item.options : [];

  // itemについてるoptionのデータ（DBで固定さててる）
  const itemOptionData: options[] = itemOption.map((option) => {
    return {
      id: option.id,
      name: option.name,
      price: option.price,
    };
  });

  console.log('itemOptionData:', itemOptionData);
  console.log('itemOptionData.mapID:' + itemOptionData.map((option) => option.id));
  console.log('itemOptionData.mapName' + itemOptionData.map((option) => option.name));

  // selectしているoptionのid配列
  const ids = selectOptions.map((option) => option.id);

  // selectしているoptionの配列を作成
  // const options = sortingOption(ids, itemOption);
  // newOrder
  const newOrder: order = {
    id: selectOrder.id,
    item: item as items,
    qty: selectMenuqty,
    options: choiceOptions,
  };

  useEffect(() => {
    setNewOrder(newOrder);
    console.log('newOrder!!!!!:', newOrder);
  }, [choiceOptions]);

  return (
    <div>
      <Box sx={{ ml: '50px' }}>
        <Box>
          <CustomizeMenu itemImg={itemImg} itemName={itemName} />
        </Box>
        <Box sx={{ fontSize: '30px' }}>カスタマイズ</Box>
        <Box>
          {itemOption.map((itemOption: options, index) => {
            return (
              <CustmizeGraf
                key={index}
                itemOption={itemOption}
                choiceOptions={choiceOptions}
                setChoiceOptions={setChoiceOptions}
                selectOptions={selectOptions}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default CustomizeChangeLeft;
