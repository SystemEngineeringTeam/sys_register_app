import { Box } from '@mui/material';
import DisplayNumber from './ DisplayNumber';
const DisplayNumberBox = ({ orders }: { orders: number[] }) => {
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
        {orders.map((order: number) => {
          return <DisplayNumber orders={order} />;
        })}
      </Box>
    </div>
  );
};
export default DisplayNumberBox;
