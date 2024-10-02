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
  id: number;
}

const OrderMenuLeft = ({ id }: OrderMenueLeftProps) => {
  const { data } = useOrderCollection();

  console.log('id', id);

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

  const menuname = menu[id];
  console.log('🚀 ~ menuname:', menuname);

  const menuqty2 = menuqty[id];
  console.log('🚀 ~ menuqty2:', menuqty2);

  const customize2 = customize[id];
  console.log('🚀 ~ customize2:', customize2);

  return (
    <div>
      <Box>
        <Box>
          {orders.map((index) => {
            const selectMenu = menu[index] || {};
            console.log('🚀 ~ {orders.map ~ menu:', selectMenu.name);
            console.log('🚀 ~ {orders.map ~ menu:', selectMenu.price);
            const selectCustomize = customize[index] || {};
            const selectMenuqty = menuqty[index] || { qty: 0 };

            return (
              <OrderMenueContena
                selectMenuName={selectMenu.name || ''}
                selectMenuPrice={selectMenu.price || 0}
                selectMenuImg={selectMenu.name || ''}
                selectMenuqty={selectMenuqty.qty || 0} // menuqtyの値を渡す
                selectCustomizeName={selectCustomize.name || ''} // カスタマイズ名を渡す（カスタマイズがある場合）
                selectCustomizePrice={selectCustomize.price || 0} // カスタマイズ価格を渡す（カスタマイズがある場合）
                id={id}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;
