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
        <Box >
          <OrderMenuLeft />
        </Box>

        {/* 右側注文情報 */}
        <Box sx={{display:'flex',justifyContent:'center',textAlign:'center'}}>
          <OrderMenuRight />
        </Box>
      </Stack>
    </div>
  );
};

export default OrderChange;
