import { Box } from '@mui/material';
import React from 'react';
import NumberButton from './NumberButton';
import { items } from '../types';
import { processOrderChange } from '../utils/processOrderChange';

interface NumberButtonBoxProps {
  orders: number[];
  menu: {
    name: string | null;
    price: number | null;
  }[];
  menuqty: {
    qty: number | null;
  }[];
  customize: {
    name: string;
    price: number;
  }[];
}

const NumberButtonBox = ({ orders, menu, menuqty, customize }: NumberButtonBoxProps) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          wordBreak: 'break-word',
          flexWrap: 'wrap',
        }}
      >
        {orders.map((value, index) => {
          console.log('🚀 ~ index:', index);
          console.log('🚀 ~ {orders.map ~ value:', value);

          const selectMenu = menu[index];
          console.log('🚀 ~ {orders.map ~ selectMenu:', selectMenu);

          const selectQty = menuqty[index];
          console.log('🚀 ~ selectQty:', selectQty);

          const selectCustomize = customize[index];
          console.log('🚀 ~ selectCustomize:', selectCustomize);

          return (
            <NumberButton
              orders={value}
              menu={selectMenu ? [selectMenu] : []}
              menuqty={selectQty ? [selectQty] : []}
              selectCustomize={selectCustomize ? [selectCustomize] : []}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default NumberButtonBox;
