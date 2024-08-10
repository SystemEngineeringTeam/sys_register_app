import { Box, Grid } from '@mui/material';
import Order from '../pages/Order';

// var order = [1,2,3,4,4];
// const orderLoop = order.map(( values ) => {
//    return(values);
// })
interface NumberButtonProps{
    orders:number,
}
const NumberButton = ({orders}:NumberButtonProps) => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          border: '2px solid #2b2b2b',
          textAlign: 'center',
          padding: '4px',
          borderRadius: '1vh',
          width: '180px',
          fontSize: '70px',
          margin: '12px',
        }}
      >
        {orders}
      </Box>
    </div>
  );
};

export default NumberButton;