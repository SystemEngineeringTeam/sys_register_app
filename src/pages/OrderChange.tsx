import React, { useEffect, useState } from 'react';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';
import { Box, Stack } from '@mui/material';
import OrderButton from '../components/OrderButton';
import { useLocation } from 'react-router-dom';
import { processOrderChange } from '../utils/processOrderChange';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processOrderCollection } from '../utils/processOrderCollection';

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
      
    console.log(state);
    console.log(state.menu);
    console.log(state.id);
    console.log(state.name);
    console.log(state.menu.id);


  // const menu = processOrderChange(
  //   (orderCollectionData.data || []).flatMap((order) => order.order.flatMap((o) => o.item)),
  // );

  const order = processOrderCollection(orderCollectionData.data || []);
        console.log("🚀 ~ Order ~ order:", order)

        const orders = order.map((order) => Number(order.id))
        console.log("🚀 ~ OrderChange ~ orders:", orders)
        

  const processedOptions = processOrderChange(
    (orderCollectionData.data || [])
    .flatMap((order) => order.order.flatMap((o) => o.item)),
  );



  console.log("🚀 ~ OrderChange ~ processedOptions:", processedOptions)

  // // 選択された `order` に対応する `processedOptions` をフィルタリング
  // const filteredOptions = processedOptions.filter((_, index) => setOrdersList.includes(index + 1));

   // ordersList に含まれているか確認する
   

  //  const num = state.map(() => Number(state));
  //  console.log("🚀 ~ OrderChange ~ num:", num)
   
   
  //  console.log("state - 1:",+num - 1);
  //    const selectMenu = processedOptions[state - 1]; // 選択されたメニュー
  //    console.log("🚀 ~ OrderChange ~ selectMenu:", selectMenu)

  console.log(state);
    console.log(state.menu);
   

  return (

    <div>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* 左側メニューリスト */}
        <Box sx={{ flex: 4, overflowY: 'auto' }}>
        <OrderMenuLeft processedoptions={state.menu} orders={state.menu} />
          
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
