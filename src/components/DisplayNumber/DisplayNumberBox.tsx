import { Box, Grid2 } from '@mui/material';
import DisplayNumber from './DisplayNumber';

const DisplayNumberBox = ({ orders }: { orders: number[] }) => {
  return (
    <div>
      <Box>
        <Grid2 container rowSpacing={1}>
          {orders.map((order: number) => {
            return (
              <Grid2
                key={order}
                size={{ xs: 6 }}
                sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
              >
                <DisplayNumber orderId={order} />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </div>
  );
};
export default DisplayNumberBox;
