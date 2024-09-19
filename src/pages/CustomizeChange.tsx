import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomizeChangeLeft from '../components/CustomizeChangeLeft';
import CustomizeChangeRight from '../components/CustomizeChangeRight';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processCustomizeChange } from '../utils/processCustomizeChange';

function CustomizeChange() {

  const { state } = useLocation();
  const [ordersList,setOrdersList] = useState<number[]>([]);

  useEffect(() => {
    if(state && state.state){
      setOrdersList(state.state);
    }
  },[state]);


  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);

  switch (orderCollectionData.state) {
    case 'loading':
      return <p>Loading...</p>;

    case 'hasError':
      return <p>Error</p>;

    case 'hasData':


  
      
    console.log("🚀 ~ use Effect ~ state:", state)
    console.log("🚀 ~ use Effect ~ state.ordername:", state.ordername)
    console.log("🚀 ~ use Effect ~ ordername:", state.name)
    console.log("🚀 ~ use Effect ~ cusotomizename:", state.customizename)


  
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 6 }}>
          <CustomizeChangeLeft processedoptions={state.ordername} customizename={state.customizename}/>
        </Box>
        <Box sx={{ flex: 4 }}>
          <CustomizeChangeRight />
        </Box>
      </Box>
    </div>
  );
}
}

export default CustomizeChange;
