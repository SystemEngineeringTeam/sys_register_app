import { Box, Button, Grid } from '@mui/material';
import Order from '../pages/Order';
import { Link } from 'react-router-dom';

// var order = [1,2,3,4,4];
// const orderLoop = order.map(( values ) => {
//    return(values);
// })
interface NumberButtonProps {
  orders: number;
}
const NumberButton = ({ orders }: NumberButtonProps) => {
  return (
    <div>
      <Link to="/orderchange">
        <Button
          sx={{
            flexGrow: 1,
            border: '2px solid #2b2b2b',
            textAlign: 'center',
            padding: '4px',
            borderRadius: '1vh',
            width: '180px',
            fontSize: '70px',
            margin: '12px',
            color:'black'

          }}
        >
          {orders}
        </Button>
      </Link>
    </div>
  );
};

export default NumberButton;
