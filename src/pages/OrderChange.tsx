import React, { useEffect, useState } from 'react';

import OrderMenuRight from '../components/OrderMenuRight';
import { Box, Stack } from '@mui/material';
import OrderButton from '../components/OrderButton';
import { useLocation } from 'react-router-dom';
import { processOrderChange } from '../utils/processOrderChange';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processOrderCollection } from '../utils/processOrderCollection';
import OrderMenuLeft from '../components/OrderMenuLeft';

const OrderChange = () => {
  const { state } = useLocation();
  const [ordersList, setOrdersList] = useState<number[]>([]);


  useEffect(() => {
    if (state && state.state) {
      setOrdersList(state.state);
    }
  }, [state]);
  
    console.log("🚀 ~ useEffect ~ setOrdersList:", ordersList)
    
  

  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);

  switch (orderCollectionData.state) {
    case 'loading':
      return <p>Loading...</p>;

    case 'hasError':
      return <p>Error</p>;

    case 'hasData':


  // const menu = processOrderChange(
  //   (orderCollectionData.data || []).flatMap((order) => order.order.flatMap((o) => o.item)),
  // );

  const order = processOrderCollection(orderCollectionData.data || []);
        console.log("🚀 ~ Order ~ order:", order)

        const orders = order.map((order) => Number(order.id))
        console.log("🚀 ~ OrderChange ~ orders:", orders)
        

  console.log(state);
  console.log(state.states);
    console.log(state.menu);
    console.log(state.qty);
    console.log(state.menuqty);
   console.log(order);
   console.log(state.selectCustomize);

  return (

    <div>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* 左側メニューリスト */}
        <Box sx={{ flex: 4, overflowY: 'auto' }}>
        <OrderMenuLeft processedoptions={state.menu} orders={state.states} menuqty={state.menuqty} 
        customize={state.selectCustomize}
        />
          
        </Box>

        {/* 右側注文情報 */}

        <Box sx={{ flex: 1 }}>
          <OrderMenuRight />
        </Box>
      </Box>
    </div>
  );
};
}

export default OrderChange;
