import { Box } from '@mui/material';
import React from 'react';
// eslint-disable-next-line no-restricted-imports
import ItemOptions from '../OrderPayments/ItemOptions';
import { type items } from '@/types';
// eslint-disable-next-line no-restricted-imports
import Yakitori from '../../../public/yakitori.png';

interface ItemOverviewProps {
  item: items;
}
// itemを受け取って商品概要を表示する
const ItemOverview = ({ item }: ItemOverviewProps) => {
  return (
    <Box sx={{ display: 'flex', borderTop: '1px solid #2b2b2b' }}>
      <Box sx={{ display: 'flex', margin: '0.5rem' }}>
        {/* 焼き鳥の画像を仮置き */}
        <img alt="noImage" className="yakitori" src={Yakitori} style={{ maxWidth: '5rem', maxHeight: '5rem' }} />
        <Box sx={{ marginLeft: '1rem', alignContent: 'center' }}>
          <Box>{item.name}</Box>
          <Box>{item.price}円</Box>
        </Box>
        <Box sx={{ marginLeft: '1rem', alignContent: 'center' }}>
          <ItemOptions options={item.options} />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemOverview;
