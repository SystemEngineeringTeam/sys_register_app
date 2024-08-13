import React from 'react';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';
import { Box, Stack } from '@mui/material';
import OrderButton from '../components/OrderButton';

const OrderChange = () => {
  return (
    <div>
      <Stack direction="row" >
        {/* 左側メニューリスト */}
        <Box>
          <OrderMenuLeft />
        </Box>

        {/* 右側注文情報 */}
        <Box>
          <OrderMenuRight />
        </Box>
      </Stack>
    </div>
  );
};

export default OrderChange;
