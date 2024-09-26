import React, { ReactElement } from 'react';
import NumberButton from '../components/NumberButton';
import { Box, Grid } from '@mui/material';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { useAtom } from 'jotai';
import { processOrderCollection } from '../utils/processOrderCollection';
import { processNumber, processOrderChange } from '../utils/processOrderChange';
import { processCustomizeChange } from '../utils/processCustomizeChange';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { useMoney } from '../firebase/useMoney';

// const orders = [
//   1, 2, 3, 4, 4, 5, 4, 231, 3245, 324, 332, 344, 223, 421, 324, 321, 123, 242, 234, 231, 324, 23, 4, 234, 443, 244,
//   232,
// ];

export default function Order(): ReactElement {
  const { data } = useOrderCollection();
  const { money } = useMoney();

  const process = 'accounting';
  const order = processOrderCollection(process);
  console.log('🚀 ~ Order ~ order:', order);

  const orders = order.map((order) => Number(order.id));
  //const orders = [Number(order)];

  const menu = processOrderChange((data || []).flatMap((order) => order.order.flatMap((o) => o.item)));

  const menuqty = processNumber((data || []).flatMap((order) => order.order));

  const processCustmize = processCustomizeChange(
    (data || []).flatMap((order) => order.order.flatMap((o) => o.options)),
  );

  console.log('🚀 ~ Order ~ orders:', orders);
  console.log('🚀 ~ Order ~ menu:', menu);
  console.log('🚀 ~ Order ~ menuqty:', menuqty);
  console.log('🚀 ~ Order ~ processCustmize:', processCustmize);

  return (
    <div>
      <NumberButtonBox orders={orders} menu={menu} menuqty={menuqty} customize={processCustmize} />
      <OrderWaitPeople orders={orders} />
    </div>
  );
}
