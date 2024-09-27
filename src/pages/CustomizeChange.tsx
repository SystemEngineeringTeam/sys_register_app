import { Box } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import CustomizeChangeLeft from '../components/CustomizeChangeLeft';
import CustomizeChangeRight from '../components/CustomizeChangeRight';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processCustomizeChange } from '../utils/processCustomizeChange';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { useMoney } from '../firebase/useMoney';

interface CustomizeChangeProps{
  id:number;
}

export default function CustomizeChange(): ReactElement {
  const { data } = useOrderCollection();
  const { money } = useMoney();
  const { state } = useLocation();
  const [ordersList, setOrdersList] = useState<number[]>([]);

  const location = useLocation();



  console.log('🚀 ~ use Effect ~ state:', state);
  console.log('🚀 ~ use Effect ~ state.ordername:', state.ordername);
  console.log('🚀 ~ use Effect ~ ordername:', state.name);
  console.log('🚀 ~ use Effect ~ cusotomizename:', state.customizename);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 4 ,overflowY:'auto'}}>
          <CustomizeChangeLeft processedoptions={state.ordername} customizename={state.customizename} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <CustomizeChangeRight id={state.id.toString()}/>
        </Box>
      </Box>
    </div>
  );
}
