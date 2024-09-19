import React from 'react';
import NumberButton from '../components/NumberButton';
import { Box, Grid } from '@mui/material';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { useAtom } from 'jotai';
import { processOrderCollection } from '../utils/processOrderCollection';
import { processNumber, processOrderChange } from '../utils/processOrderChange';
import { processCustomizeChange } from '../utils/processCustomizeChange';

const Order = () => {
  // const orders = [
  //   1, 2, 3, 4, 4, 5, 4, 231, 3245, 324, 332, 344, 223, 421, 324, 321, 123, 242, 234, 231, 324, 23, 4, 234, 443, 244,
  //   232,
  // ];

  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);

  switch (orderCollectionData.state) {
    case 'loading':
      return <p>Loading...</p>;

    case 'hasError':
      return <p>Error</p>;

    case 'hasData':
      const order = processOrderCollection(orderCollectionData.data || []);
      console.log('🚀 ~ Order ~ order:', order);

      const orders = order.map((order) => Number(order.id));
      //const orders = [Number(order)];

      const menu = processOrderChange(
        (orderCollectionData.data || []).flatMap((order) => order.order.flatMap((o) => o.item)),
      );

      const menuqty = processNumber((orderCollectionData.data || []).flatMap((order) => order.order));

      const processCustmize = processCustomizeChange(
        (orderCollectionData.data || []).flatMap((order) => order.order.flatMap((o) => o.options)),
      );
      console.log("🚀 ~ Order ~ processCustmize:", processCustmize)

      console.log('🚀 ~ Order ~ orders:', orders);
      console.log('🚀 ~ Order ~ menu:', menu);
      console.log('🚀 ~ Order ~ menuqty:', menuqty);

      return (
        <div>
          <NumberButtonBox orders={orders} menu={menu} menuqty={menuqty} customize={processCustmize}/>
          <OrderWaitPeople orders={orders} />
        </div>
      );
  }
};
export default Order;
