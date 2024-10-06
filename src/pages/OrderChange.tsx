import { type ReactElement } from 'react';

import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';

export default function OrderChange(): ReactElement {
  interface State {
    orderId: number;
    ordersId: number[];
  }

  const location = useLocation();
  const { state } = location as { state: State };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* 左側メニューリスト */}

        <Box sx={{ flex: 4, overflowY: 'auto', mt: '20px', mr: '20px', ml: '20px' }}>
          <OrderMenuLeft id={state.orderId} ordersId={state.ordersId} />
        </Box>

        {/* 右側注文情報 */}

        <Box sx={{ flex: 1 }}>
          <OrderMenuRight id={state.ordersId.toString()} />
        </Box>
      </Box>
    </div>
  );
}
