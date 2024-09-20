import { Box, Button, Grid } from '@mui/material';
import Order from '../pages/Order';
import { Link } from 'react-router-dom';
import DisplayNumber from './DisplayNumber/ DisplayNumber';

// var order = [1,2,3,4,4];
// const orderLoop = order.map(( values ) => {
//    return(values);
// })
interface NumberButtonProps {
  orders: number;
  menu: {
    name: string | null;
    price: number | null;
  }[];
  menuqty: {
    qty: number | null;
  }[];
  selectCustomize: {
    name: string;
    price: number;
  }[];
}
const NumberButton = ({ orders, menu, menuqty, selectCustomize }: NumberButtonProps) => {
  //console.log('🚀 ~ NumberButton ~ menu:', menu);
  console.log('🚀 ~ NumberButton ~ orders:', orders);

  return (
    <div>
      <Link to="/orderchange" state={{ states: orders, menu: menu, menuqty: menuqty,selectCustomize: selectCustomize }}>
      <DisplayNumber orders={orders} />
      </Link>
    </div>
  );
};

export default NumberButton;
