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
import Yakitori  from '/yakitori_solt.png'

const OrderMenuLeft = () => {
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
      const processedOptions = processOrderChange(
        (orderCollectionData.data || [])
        .flatMap((order) => order.order.flatMap((o) => o.item)),
      );
      console.log('🚀 ~ Order ~ order:', processedOptions);


      return (
        <div>
          <Box>
            <Box>
              {processedOptions.map((order) => (
                <OrderMenueContena ordername={order.name || ''} orderprice={order.price || 0} orderimg={order.name || ''} />
              ))}
            </Box>
          </Box>
        </div>
      );
  }
};
export default OrderMenuLeft;
