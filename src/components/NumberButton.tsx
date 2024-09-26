import { Box, Button, Grid } from '@mui/material';
import Order from '../pages/Order';
import { Link } from 'react-router-dom';
import DisplayNumber from './DisplayNumber/DisplayNumber';

// var order = [1,2,3,4,4];
// const orderLoop = order.map(( values ) => {
//    return(values);
// })
interface NumberButtonProps {
  orders: number;
}
const NumberButton = ({ orders, }: NumberButtonProps) => {
  //console.log('🚀 ~ NumberButton ~ menu:', menu);
  console.log('🚀 ~ NumberButton ~ orders:', orders);

  return (
    <div>
      <Link to="/orderchange" state={{ id: orders, }}>
        <DisplayNumber orders={orders} />
      </Link>
    </div>
  );
};

export default NumberButton;
