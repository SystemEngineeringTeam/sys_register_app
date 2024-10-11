import { Link } from 'react-router-dom';
import DisplayNumber from './DisplayNumber/DisplayNumber';
import { Box } from '@mui/material';

interface NumberButtonProps {
  orderId: number;
}
const NumberButton = ({ orderId }: NumberButtonProps) => {
  return (
    <div>
      <Link state={{ orderId }} to="/orderchange">
        <Box sx={{width:'30%'}}>
          <DisplayNumber orderId={orderId} />
        </Box>
      </Link>
    </div>
  );
};

export default NumberButton;
