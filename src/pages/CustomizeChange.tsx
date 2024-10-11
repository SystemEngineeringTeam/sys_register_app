import { type options, type order } from '@/types';
import { Box } from '@mui/material';
import { type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import CustomizeChangeLeft from '../components/CustomizeChangeLeft';
import CustomizeChangeRight from '../components/CustomizeChangeRight';
import { processOrderCollection } from '@/utils/processOrderCollection';
import { sortingOrders } from '@/utils/sortingOrders';

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

  const selectId = state.selectId;

  // selectIDに一致するorderを取得
  const orderData = sortingOrders(selectId);
  // console.log("🚀 ~ CustomizeChange ~ orderData:", orderData)
  

  console.log("🚀 ~ CustomizeChange ~ selectId:", state.selectId)
  console.log("🚀 ~ CustomizeChange ~ selectId:", state.selectMenuId)
  console.log("🚀 ~ CustomizeChange ~ selectId:", state.selectMenuqty)
  console.log("🚀 ~ CustomizeChange ~ selectId:", state.selectOptions)
  console.log("🚀 ~ CustomizeChange ~ selectId:", state.selectOrder.id)

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
          <CustomizeChangeRight  orderData={orderData} newOrderData={state.newOrderData} selectId={state.selectId}  selectectOrderId={state.selectOrder.id} selectColectionOrder={state.selectOrder.item.category_id} />
        </Box>
      </Box>
    </div>
  );
}
