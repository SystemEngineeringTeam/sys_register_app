import { Card, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

const OrderNumber = () => (
  <div>
    <Grid
      container
      // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Card
        sx={{
          backgroundColor: grey[300],
          fontSize: 40,
          minWidth: 160,
        }}
      >
        185
      </Card>
    </Grid>
  </div>
);
export default OrderNumber;
