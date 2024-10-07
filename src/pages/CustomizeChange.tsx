import { options, order } from '@/types';
import { Box } from '@mui/material';
import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import CustomizeChangeLeft from '../components/CustomizeChangeLeft';
import CustomizeChangeRight from '../components/CustomizeChangeRight';


export default function CustomizeChange(): ReactElement {
  interface State {
    selectMenuName: string;
    selectMenuqty: number;
    selectOptions: options[];
    selectId: number;
    selectMenuId: string;
    newOrderData:order[];
    newOrder:order;
  }

  const location = useLocation();
  const { state } = location as { state: State };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 4, overflowY: 'auto' }}>
          <CustomizeChangeLeft
            selectId={state.selectId}
            selectOptions={state.selectOptions}
            selectMenuqty={state.selectMenuqty}
            selectMenuId={state.selectMenuId}
          />
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <CustomizeChangeRight selectId={state.selectId}   newOrderData = {state.newOrderData} newOrder = {state.newOrder}  />
        </Box>
      </Box>
    </div>
  );
}
