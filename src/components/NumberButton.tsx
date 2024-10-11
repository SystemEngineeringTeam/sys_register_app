import { Link } from 'react-router-dom';
import DisplayNumber from './DisplayNumber/DisplayNumber';

interface NumberButtonProps {
  orderId: number;
}
const NumberButton = ({ orderId }: NumberButtonProps) => {
  return (
    <div>
      <Link state={{ orderId }} to="/orderchange">
        <DisplayNumber orderId={orderId} />
      </Link>
    </div>
  );
};

export default NumberButton;
