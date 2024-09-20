import { Box, Grid } from '@mui/material';
import DisplayNumber from './DisplayNumber';
const DisplayNumberBox = ({ orders }: { orders: number[] }) => {
  return (
    <div>
      <Box
        // sx={{
        //   display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'center',
        //   alignContent: 'center',
        //   wordBreak: 'break-word',
        //   flexWrap: 'wrap',
        // }}
      >
<Grid container rowSpacing={1} >

        {orders.map((order: number) => {
          return(
          <Grid  xs={4} display="flex" justifyContent="center" alignItems="center"  >
            <DisplayNumber orders={order} />
          </Grid>
          );
        })}
        </Grid>
      </Box>
    </div>
  );
};
export default DisplayNumberBox;
