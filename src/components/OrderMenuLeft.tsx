import React from 'react';
import NumberButton from '../components/NumberButton';
import { Box, Grid } from '@mui/material';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { useAtom } from 'jotai';
import { processOrderCollection } from '../utils/processOrderCollection';
import { processOrderChange } from '../utils/processOrderChange';
import OrderMenueContena from './OrderMenueContena';
import Yakitori from '/yakitori_solt.png';

interface OrderMenueLeftProps {
  orders: {
    id: string | null;
  }[];
  processedoptions: {
    name: string | null;
    price: number | null;
  }[];
  menuqty: {
    qty: number | null;
  }[];
  customize: {
    name: string;
    price: number;
  }[];
}

const OrderMenuLeft = ({ orders, processedoptions, menuqty, customize }: OrderMenueLeftProps) => {
  // const orders = [
  //   1, 2, 3, 4, 4, 5, 4, 231, 3245, 324, 332, 344, 223, 421, 324, 321, 123, 242, 234, 231, 324, 23, 4, 234, 443, 244,
  //   232,
  // ];

  console.log('processedOptions:' + processedoptions);
  console.log('menuqty:' + menuqty);

  const order = Number(orders);

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
                ordername={order.name || ''}
                orderprice={order.price || 0}
                orderimg={order.name || ''}
                menuqty={qty} // menuqtyの値を渡す
                customizename={custom.name || ''} // カスタマイズ名を渡す（カスタマイズがある場合）
                customizeprice={custom.price || 0} // カスタマイズ価格を渡す（カスタマイズがある場合）
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;
