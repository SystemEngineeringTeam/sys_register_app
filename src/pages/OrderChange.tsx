import { type ReactElement, useEffect } from 'react';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { sortingOrders } from '@/utils/sortingOrders';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';
import { useAtom } from 'jotai';
import { orderDataAtom } from '@/stores/orderAtom';

export default function OrderChange(): ReactElement {
  interface State {
    orderId: number;
  }

  

  const location = useLocation();
  const { state } = location as { state: State };

  // orderCollectionのIDを取得
  const orderCollection = useOrderCollection();
  const selectId = state.orderId;
  console.log("🚀 ~ OrderChange ~ orderId:", state.orderId)
  // selectIDに一致するorderを取得
  const orderData = sortingOrders(selectId);

  const optData = orderData.map((order) => {
    order.options.map((option) => option.id);
  });

  

  const [newOrderData, setNewOrderData] = useAtom(orderDataAtom);

  useEffect(() => {
    setNewOrderData(orderData);
  }, [orderData]);

  console.log('orderData@@@@@@@@@@@@@@@@:', orderData);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* 左側メニューリスト */}
        <Box sx={{ flex: 4, overflowY: 'auto', mt: '20px', mr: '20px', ml: '20px' }}>
          <OrderMenuLeft
            newOrderData={newOrderData}
            orderData={orderData}
            selectId={selectId}
            setNewOrderData={setNewOrderData}

          />
        </Box>

        {/* 右側注文情報 */}
        <Box sx={{ flex: 1 }}>
          <OrderMenuRight selectId={selectId} orderData={orderData}/>
        </Box>
      </Box>
    </div>
  );
}
