import { Box } from '@mui/material';
import { type ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomizeChangeLeft from '../components/CustomizeChangeLeft';
import CustomizeChangeRight from '../components/CustomizeChangeRight';
import { useMoney } from '../firebase/useMoney';
import { useOrderCollection } from '../firebase/useOrderCollection';

export default function CustomizeChange(): ReactElement {
  const { data } = useOrderCollection();
  const { money } = useMoney();
  const { state } = useLocation();
  const [ordersList, setOrdersList] = useState<number[]>([]);

  useEffect(() => {
    if (state?.state) {
      setOrdersList(state.state);
    }
  }, [state]);

  console.log('🚀 ~ use Effect ~ state:', state);
  console.log('🚀 ~ use Effect ~ state.ordername:', state.ordername);
  console.log('🚀 ~ use Effect ~ ordername:', state.name);
  console.log('🚀 ~ use Effect ~ cusotomizename:', state.customizename);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 4, overflowY: 'auto' }}>
          <CustomizeChangeLeft customizename={state.customizename} processedoptions={state.ordername} />
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <CustomizeChangeRight />
        </Box>
      </Box>
    </div>
  );
}
