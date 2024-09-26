import { Box } from '@mui/material';
import React from 'react';
// eslint-disable-next-line no-restricted-imports
import ItemOptions from '../OrderPayments/ItemOptions';
import { type items } from '@/types';

interface ItemOverviewProps {
  item: items;
}
// itemを受け取って商品概要を表示する
const ItemOverview = ({ item }: ItemOverviewProps) => {
  return (
    <Box sx={{ display: 'flex', borderTop: '1px solid #2b2b2b' }}>
      <Box sx={{ display: 'flex', margin: '1rem' }}>
        <Box sx={{ margin: '1rem' }}>image</Box>
        <Box sx={{ marginLeft: '1rem' }}>
          <Box>{item.name}</Box>
          <Box>{item.price}円</Box>
        </Box>
        <Box sx={{ marginLeft: '2rem' }}>
          <ItemOptions options={item.options} />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemOverview;
