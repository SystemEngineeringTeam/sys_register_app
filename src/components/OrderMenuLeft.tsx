import { Box } from '@mui/material';
import OrderMenueContena from './OrderMenueContena';
import { processOrderCollection } from '@/utils/processOrderCollection';
import { processNumber, processOrderChange } from '@/utils/processOrderChange';
import { processCustomizeChange } from '@/utils/processCustomizeChange';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { useState } from 'react';
import { useMoney } from '@/firebase/useMoney';
import { useLocation } from 'react-router-dom';

interface OrderMenueLeftProps {
  id:number;
}

const OrderMenuLeft = ({id}:OrderMenueLeftProps) => {

  const { data } = useOrderCollection();


  const process = 'accounting';
  const order = processOrderCollection(process);
  console.log('🚀 ~ Order ~ order:', order);

  const orders = order.map((order) => Number(order.id));
  console.log('🚀 ~ OrderChange ~ orders:', orders);

  const menu = processOrderChange((data || []).flatMap((order) => order.order.flatMap((o) => o.item)));
  console.log('🚀 ~ menu:', menu);

  const menuqty = processNumber((data || []).flatMap((order) => order.order));
  console.log('🚀 ~ menuqty:', menuqty);

  const customize = processCustomizeChange((data || []).flatMap((order) => order.order.flatMap((o) => o.options)));

  // console.log('processedOptions:' + processedoptions);
  // console.log('menuqty:' + menuqty);

  return (
    <div>
      <Box>
        <Box>
          {orders.map(() => {
            const selectMenu = menu[id];
            const selectCustomize = customize[id];
            const selectMenuqty = menuqty[id];

            return (
              <OrderMenueContena
                selectMenuName={selectMenu.name || ''}
                selectMenuPrice={selectMenu.price || 0}
                selectMenuImg={selectMenu.name || ''}
                selectMenuqty={selectMenuqty.qty || 0} // menuqtyの値を渡す
                selectCustomizeName={selectCustomize.name || ''} // カスタマイズ名を渡す（カスタマイズがある場合）
                selectCustomizePrice={selectCustomize.price || 0} // カスタマイズ価格を渡す（カスタマイズがある場合）
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;
