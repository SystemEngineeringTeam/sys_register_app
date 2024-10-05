import { Box, Typography } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';
import OrderNumber from './OrderNumber';
import { idToTotalAmount } from '../utils/accountingUtils';
import { useOrderCollection } from '../firebase/useOrderCollection';

interface OrderMenuRightProps {
  id: string;
}

const OrderMenuRight = ({ id }: OrderMenuRightProps) => {
  {
    const { data } = useOrderCollection();

    const totalAmount = data ? idToTotalAmount(id, data) : 0;

    return (
      <Box
        sx={{
          position: 'fixed', // スクロールしても固定
          height: '100vh',
          width: '20vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* 注文番号表示 */}
        <Box sx={{ marginTop: '50px' }}>
          <OrderNumber id={id} />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', mb: '50px' }}>
          {/* 合計金額表示 */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',

            }}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
                color: '#666',
                lineHeight: '1.5rem',
              }}
            >
              計
            </Typography>
            <Typography
              sx={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#000',
                lineHeight: '3rem',
                marginLeft: '8px',
                mt:'60px'
              }}
            >
              {totalAmount}円
            </Typography>
          </Box>

          {/* ボタン */}
          <Box sx={{ marginTop: '20px' }}>
            <OrderButton id={id} />
          </Box>
        </Box>
      </Box>
    );
  }
};

export default OrderMenuRight;
