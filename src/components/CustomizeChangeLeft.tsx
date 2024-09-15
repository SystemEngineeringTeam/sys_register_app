import React from 'react';
import CustomizeMenu from './CustomizeMenu';
import { Box } from '@mui/material';
import CustmizeGraf from './CustmizeGraf';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processCustomizeChange } from '../utils/processCustomizeChange';
import { processCustomize } from '../utils/processCustomize';

function CustomizeChangeLeft() {
  //const customizechanges = ['カスタマイズ1', 'カスタマイズ2', 'カスタマイズ3'];\

  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);

  switch (orderCollectionData.state) {
    case 'loading':
      return <p>Loading...</p>;

    case 'hasError':
      return <p>Error</p>;

    case 'hasData':
    const processCustmize = processCustomize((orderCollectionData.data || [])
    .flatMap((order) => 
      order.order.flatMap((o) => 
        o.options 
      ))
  )

  console.log("🚀 ~ CustomizeChangeLeft ~ processCustmize:", processCustmize)

  return (
    
    <div>
      <Box sx={{ ml: '50px' }}>
        <Box>
          <CustomizeMenu />
        </Box>
        <Box sx={{ fontSize: '30px' }}>カスタマイズ</Box>
        <Box>
          {processCustmize.map((order) => (
            <CustmizeGraf customize={order.name || ''} />
          ))}
        </Box>
      </Box>
    </div>
  );
}
}
export default CustomizeChangeLeft;
