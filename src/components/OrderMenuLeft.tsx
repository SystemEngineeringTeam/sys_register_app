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

  // const menuname = menu[id];
  // console.log('🚀 ~ menuname:', menuname);

  // const menuqty2 = menuqty[id];
  // console.log('🚀 ~ menuqty2:', menuqty2);

  // const customize2 = customize[id];
  // console.log('🚀 ~ customize2:', customize2);
  return (
    <div>
      <Box>
        <Box>
          {orders.map((orderId, index) => {
            // idと一致するメニューを取得
            if (orderId === id) {
              const selectedMenu = menu[index] || {};
              const qty = menuqty[index]?.qty || 0;
              const custom = customize?.[index] || {};
  
              console.log("🚀 ~ selectedMenu:", selectedMenu.name);
              console.log("🚀 ~ selectedMenu price:", selectedMenu.price);
  
              return (
                <OrderMenueContena
                  key={index} // keyを追加することで一意の要素とする
                  selectMenuName={selectedMenu.name || ''}
                  selectMenuPrice={selectedMenu.price || 0}
                  selectMenuImg={selectedMenu.name || ''}
                  selectMenuqty={qty || 0}
                  selectCustomizeName={custom.name || ''}
                  selectCustomizePrice={custom.price || 0}
                  id={id}
                />
              );
            }
  
            // idと一致しない場合は何も表示しない
            return null;
          })}
        </Box>
      </Box>
    </div>
  );
         
};

export default OrderMenuLeft;
