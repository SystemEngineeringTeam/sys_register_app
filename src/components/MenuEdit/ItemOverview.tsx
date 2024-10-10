import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
// eslint-disable-next-line no-restricted-imports
import ItemOptions from '../OrderPayments/ItemOptions';
import { category, type items } from '@/types';
// eslint-disable-next-line no-restricted-imports
import Yakitori from '../../../public/yakitori.png';
import { Link } from 'react-router-dom';

interface ItemOverviewProps {
  allItems: items[] | undefined;
  categorys: category[] | undefined;
  item: items;
}
// itemを受け取って商品概要を表示する
const ItemOverview = ({ item,allItems,categorys }: ItemOverviewProps) => {
  const selectAdd = 'add';
  const state = {
    item,
    allItems,
    categorys,
  };
  return (
    <Box sx={{ display: 'flex', borderTop: '1px solid #2b2b2b' }}>
      <Box sx={{ display: 'flex', margin: '0.5rem' }}>
        <img alt={item.imgUrl} className="yakitori" src={Yakitori} style={{ maxWidth: '8rem', maxHeight: '8rem' }} />
        <Box sx={{ marginLeft: '1rem', alignContent: 'center' }}>
          <Box>{item.name}</Box>
          <Box>{item.price}円</Box>
        </Box>
        <Box sx={{ marginLeft: '1rem', alignContent: 'center' }}>
          <ItemOptions options={item.options} />
        </Box>
        <Link state={{ state }} to="/test">
          <Button sx={{ alignContent: 'center', position: 'fixed', right: '2rem', marginTop: '0.5rem' }}>
            <EditIcon sx={{ fontSize: '4rem' }} />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ItemOverview;
