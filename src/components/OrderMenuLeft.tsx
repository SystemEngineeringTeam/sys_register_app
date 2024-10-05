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
  processedoptions: Array<{
    name: string | null;
    price: number | null;
  }>;
  menuqty: Array<{
    qty: number | null;
  }>;
  customize: Array<{
    name: string;
    price: number;
  }>;
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

  return (
    <div>
      <Box>
        <Box>
          {/* processedoptions をループして OrderMenueContena をレンダリング */}
          {processedoptions.map((order, index) => {
            const qty = menuqty[index].qty || 0; // menuqtyから該当する数量を取得
            const custom = customize?.[index]; // カスタマイズ情報を取得（必要な場合）

            return (
              <OrderMenueContena
                key={index}
                customizename={custom.name || ''} // カスタマイズ名を渡す（カスタマイズがある場合）
                customizeprice={custom.price || 0} // カスタマイズ価格を渡す（カスタマイズがある場合）
                menuqty={qty} // menuqtyの値を渡す
                orderimg={order.name || ''}
                ordername={order.name || ''}
                orderprice={order.price || 0}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
         
};

export default OrderMenuLeft;
