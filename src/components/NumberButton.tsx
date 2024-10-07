import { Link } from 'react-router-dom';
import DisplayNumber from './DisplayNumber/DisplayNumber';
interface NumberButtonProps {
  orderId: number;
}
const NumberButton = ({ orderId }: NumberButtonProps) => {
  return (
    <div>
      <Link to="/orderchange" state={{ orderId: orderId }}>
        <DisplayNumber orderId={orderId} />
      </Link>
    </div>
  );
};

export default NumberButton;
