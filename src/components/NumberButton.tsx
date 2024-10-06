import { Link } from 'react-router-dom';
import DisplayNumber from './DisplayNumber/DisplayNumber';
import { order } from '../types/index';

// var order = [1,2,3,4,4];
// const orderLoop = order.map(( values ) => {
//    return(values);
// })
interface NumberButtonProps {
  orderId: number;
  ordersId: number[];
}
const NumberButton = ({ orderId, ordersId }: NumberButtonProps) => {
  //console.log('🚀 ~ NumberButton ~ menu:', menu);
  console.log('🚀 ~ NumberButton ~ orders:', orderId);

  return (
    <div>
      <Link to="/orderchange" state={{ orderId: orderId, ordersId: ordersId }}>
        <DisplayNumber ordersId={orderId} />
      </Link>
    </div>
  );
};

export default NumberButton;
