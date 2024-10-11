import { Box } from '@mui/material';
import OkeyButton from './OkeyButton';
import OrderDelete from './OrderDelete';
import OrderNumber from './OrderNumber';
import { type order } from '@/types';

interface CustomizeChangeRightProps {
  selectId: number;
  newOrderData: order[];
  selectMenuId: string;
  selectOrderItemId:string;
  selectOrderItemCategoryId:string;
  orderData: order[];
}
  

const CustomizeChangeRight = ({ selectId, newOrderData , selectMenuId , selectOrderItemId , selectOrderItemCategoryId ,  orderData}: CustomizeChangeRightProps) => {
  // console.log("🚀 ~ selectId:", selectId)
  // console.log("🚀 ~ selectMenuId:", selectMenuId)

  return (
    <div>
      <Box
        sx={{
          position: 'fixed', // スクロールしても固定
          height: '100vh',
          width: '20vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ marginTop: '50px' }}>
          <OrderNumber id={selectId.toString()} />
        </Box>

        <Box sx={{ mt: '340px' }}>
          <Box>
            <OrderDelete id={selectId.toString()} selectId={selectId}  selectMenuId={selectMenuId} selectOrderItemId={selectOrderItemId} selectOrderItemCategoryId={selectOrderItemCategoryId}  orderData={orderData}/>
          </Box>
          <Box sx={{ mt: '40px' }}>
            <OkeyButton selectId={selectId} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CustomizeChangeRight;