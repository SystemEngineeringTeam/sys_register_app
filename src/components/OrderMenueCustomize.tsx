import { Box, Stack } from '@mui/material';
import React from 'react';

interface OrderMenueCustomizeProps {
  selectCustomizeName: string;
  selectCustomizePrice: number;
}

const OrderMenueCustomize = ({ selectCustomizeName, selectCustomizePrice }: OrderMenueCustomizeProps) => {
  return (
    <div>
      <Stack direction="row" sx={{ borderBottom: '1px solid #2b2b2b' }}>
        <Box sx={{ ml: '10px' }}>{selectCustomizeName}</Box>
        <Box sx={{ ml: 'auto' }}>+{selectCustomizePrice}</Box>
      </Stack>
    </div>
  );
};

export default OrderMenueCustomize;
