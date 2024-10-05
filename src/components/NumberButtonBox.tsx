import { Box } from '@mui/material';
import React from 'react';
import NumberButton from './NumberButton';

interface NumberButtonBoxProps {
  orders: number[];
  menu: Array<{
    name: string | null;
    price: number | null;
  }>;
  menuqty: Array<{
    qty: number | null;
  }>;
  customize: Array<{
    name: string;
    price: number;
  }>;
}

const NumberButtonBox = ({ordersId}:NumberButtonProps) => {


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
        {ordersId.map((value) => {
          return (
            <NumberButton
              menu={selectMenu ? [selectMenu] : []}
              menuqty={selectQty ? [selectQty] : []}
              orders={value}
              selectCustomize={selectCustomize ? [selectCustomize] : []}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default NumberButtonBox;
