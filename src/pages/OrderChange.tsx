import React from 'react';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';
import { Box, Stack } from '@mui/material';
import OrderButton from '../components/OrderButton';

const OrderChange = () => {
  return (
    <div>
      <Box sx={{display:'flex', height: '100vh'}}>
        {/* 左側メニューリスト */}
        <Box sx={{flex:4,overflowY: 'auto'}}>
          <OrderMenuLeft />
        </Box>

        {/* 右側注文情報 */}

            <Box sx={{flex:1}}>
                 <OrderMenuRight />
            </Box>

      </Box>
    </div>
  );
};

export default OrderChange;
