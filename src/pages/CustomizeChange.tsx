import { type options, type order } from '@/types';
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
    newOrderData: order[];
    newOrder: order;
    selectOrder: order;
  }

  const location = useLocation();
  const { state } = location as { state: State };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 4, overflowY: 'auto' }}>
          <CustomizeChangeLeft
            selectId={state.selectId}
            selectMenuId={state.selectMenuId}
            selectMenuqty={state.selectMenuqty}
            selectOptions={state.selectOptions}
            selectOrder={state.selectOrder}
          />
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <CustomizeChangeRight newOrderData={state.newOrderData} selectId={state.selectId} />
        </Box>
      </Box>
    </div>
  );
}
