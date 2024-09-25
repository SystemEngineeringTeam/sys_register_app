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

export default function CustomizeChange(): ReactElement {
  const { data } = useOrderCollection();
  const { money } = useMoney();
  const { state } = useLocation();
  const [ordersList, setOrdersList] = useState<number[]>([]);

  useEffect(() => {
    if (state && state.state) {
      setOrdersList(state.state);
    }
  }, [state]);

  console.log('🚀 ~ use Effect ~ state:', state);
  console.log('🚀 ~ use Effect ~ state.ordername:', state.ordername);
  console.log('🚀 ~ use Effect ~ ordername:', state.name);
  console.log('🚀 ~ use Effect ~ cusotomizename:', state.customizename);

  return (
    <div>
      <Box sx={{ display: 'flex',height: '90vh' }}>
        <Box sx={{ flex: 6 ,overflowY:'auto'}}>
          <CustomizeChangeLeft processedoptions={state.ordername} customizename={state.customizename} />
        </Box>
        <Box sx={{ flex: 4 }}>
          <CustomizeChangeRight />
        </Box>
      </Box>
    </div>
  );
}
