import { type ReactElement, useState } from 'react';

import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';
import { useMoney } from '../firebase/useMoney';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { processOrderCollection } from '../utils/processOrderCollection';
import { processNumber, processOrderChange } from '@/utils/processOrderChange';
import { processCustomizeChange } from '@/utils/processCustomizeChange';

export default function OrderChange(): ReactElement {
  interface State {
    id: number;
    menu: Array<{
      name: string | null;
      price: number | null;
    }>;
    menuqty: Array<{
      qty: number | null;
    }>;
    selectCustomize: Array<{
      name: string;
      price: number;
    }>;
  }

  const location = useLocation();
  const { state } = location as { state: State };


  return (
    
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* 左側メニューリスト */}

        <Box sx={{ flex: 4, overflowY: 'auto', mt: '20px', mr: '20px', ml: '20px' }}>
          <OrderMenuLeft customize={state.selectCustomize} menuqty={state.menuqty} processedoptions={state.menu} />
        </Box>

        {/* 右側注文情報 */}

        <Box sx={{ flex: 1 }}>
          <OrderMenuRight id={state.ordersId.toString()} />
        </Box>
      </Box>
    </div>
  );
}
