import { Box, Grid } from '@mui/material';
import DisplayNumber from './DisplayNumber';

const DisplayNumberBox = ({ orders }: { orders: number[] }) => {
  return (
    <div>
      <Box>
        <Grid container rowSpacing={1}>
          {orders.map((order: number) => {
            return (
              <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
                <DisplayNumber ordersId={order} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
export default DisplayNumberBox;
