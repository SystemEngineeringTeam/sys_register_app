import { ReactElement, useState } from 'react';

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

  const menu = processOrderChange((data || []).flatMap((order) => order.order.flatMap((o) => o.item)));
  console.log("🚀 ~ menu:", menu)

  const menuqty = processNumber((data || []).flatMap((order) => order.order));
  console.log("🚀 ~ menuqty:", menuqty)

  const custmize = processCustomizeChange(
    (data || []).flatMap((order) => order.order.flatMap((o) => o.options)),
  );

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* 左側メニューリスト */}

        <Box sx={{ flex: 4, overflowY: 'auto', mt:'20px', mr:'20px', ml:'20px'}}>

        {orders.map((index) => {
          const selectMenu = menu[index];
          console.log("🚀 ~ {orders.map ~ selectMenu:", selectMenu)
          const selectQty = menuqty[index];
          console.log("🚀 ~ {orders.map ~ selectQty:", selectQty)
          const selectCustomize = custmize[index];
          console.log("🚀 ~ selectCustomize:", selectCustomize)

          
          return(
          <OrderMenuLeft
            processedoptions={selectMenu}
            menuqty={selectQty}
            customize={selectCustomize}
          />
          );
        })}
        </Box>

        {/* 右側注文情報 */}

        <Box sx={{ flex: 1 }}>
          <OrderMenuRight id={state.id.toString()} />
        </Box>
      </Box>
    </div>
  );
}
