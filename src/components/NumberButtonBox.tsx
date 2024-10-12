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
          mb: '100px',
        }}
      >
        {ordersId.map((orderId) => {
          return (
            <Box key={orderId}>
              <NumberButton orderId={orderId} />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default NumberButtonBox;
