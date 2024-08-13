import { Card, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

const OrderNumber = () => (
  <div>
    <Grid
      container
      // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        display:"flex",
        flexFlow:'column',
        textAlign:'center',
        width:100,
        position:'fixed',
        top:80,
        right:30,
      }}
    >
    注文番号
      <Card
        sx={{
          backgroundColor: grey[300],
          fontSize: 40,
          textAlign: 'center',

        }}
      >
        185
      </Card>
    </Grid>
  </div>
);
export default OrderNumber;
