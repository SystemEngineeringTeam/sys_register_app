import { Box } from '@mui/material';
import NumberButton from './NumberButton';

interface NumberButtonProps {
  ordersId: number[];
}

const NumberButtonBox = ({ ordersId }: NumberButtonProps) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          wordBreak: 'break-word',
          flexWrap: 'wrap',
        }}
      >
        {ordersId.map((orderId) => {
          return <NumberButton orderId={orderId} />;
        })}
      </Box>
    </div>
  );
};

export default NumberButtonBox;
