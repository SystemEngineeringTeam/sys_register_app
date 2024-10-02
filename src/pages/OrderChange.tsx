import { type ReactElement, useState } from 'react';

import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';
import { useMoney } from '../firebase/useMoney';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { processOrderCollection } from '../utils/processOrderCollection';

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
  const [ordersList, setOrdersList] = useState<number[]>([]);
  const { data } = useOrderCollection();
  const { money } = useMoney();

  // useEffect(() => {
  //   if (state && state.id) {
  //     setOrdersList(state.id);
  //   }
  // }, [state]);

  // const menu = processOrderChange(
  //   (orderCollectionData.data || []).flatMap((order) => order.order.flatMap((o) => o.item)),
  // );

  const process = 'accounting';
  const order = processOrderCollection(process);
  console.log('🚀 ~ Order ~ order:', order);

  const orders = order.map((order) => Number(order.id));
  console.log('🚀 ~ OrderChange ~ orders:', orders);

  console.log(state);
  console.log(state.id);
  console.log(state.menu);
  console.log(state.menuqty);
  console.log(state.menuqty);
  console.log(order);
  console.log(state.selectCustomize);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* 左側メニューリスト */}

        <Box sx={{ flex: 4, overflowY: 'auto', mt: '20px', mr: '20px', ml: '20px' }}>
          <OrderMenuLeft customize={state.selectCustomize} menuqty={state.menuqty} processedoptions={state.menu} />
        </Box>

        {/* 右側注文情報 */}

        <Box sx={{ flex: 1 }}>
          <OrderMenuRight id={state.id.toString()} />
        </Box>
      </Box>
    </div>
  );
}
