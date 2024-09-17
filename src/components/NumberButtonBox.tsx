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
}

const NumberButtonBox = ({ orders , menu}: NumberButtonBoxProps) => {
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
        {orders.map((value) => {
          const selectMenu = menu[value - 1];

          return <NumberButton orders={value} 
          menu={selectMenu? [selectMenu] : []} 
          />;
        })}
      </Box>
    </div>
  );
};

export default NumberButtonBox;
