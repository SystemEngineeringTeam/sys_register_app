import { Link } from 'react-router-dom';
import DisplayNumber from './DisplayNumber/DisplayNumber';

// var order = [1,2,3,4,4];
// const orderLoop = order.map(( values ) => {
//    return(values);
// })
interface NumberButtonProps {
  orders: number;
  menu: Array<{
    name: string | null;
    price: number | null;
  }>;
  menuqty: Array<{
    qty: number | null;
  }>;
  selectCustomize: Array<{
    name: string;
    price: number;
  }>;
}
const NumberButton = ({ orders, menu, menuqty, selectCustomize }: NumberButtonProps) => {
  // console.log('🚀 ~ NumberButton ~ menu:', menu);
  console.log('🚀 ~ NumberButton ~ orders:', orders);

  return (
    <div>
      <Link state={{ id: orders, menu, menuqty, selectCustomize }} to="/orderchange">
        <DisplayNumber orders={orders} />
      </Link>
    </div>
  );
};

export default NumberButton;
