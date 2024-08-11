import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemOptions from './ItemOptions';
import { Grid } from '@mui/material';

const ProductOrderCard = () => {
  return (
    <div>
      <Box>
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardContent sx={{ display: 'flex' }}>
            <Typography component="h1">ねぎま</Typography>
            <Typography component="h1">4</Typography>
          </CardContent>

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ItemOptions />
            </Grid>
            <Grid item xs={6}>
              <ItemOptions />
            </Grid>
            <Grid item xs={6}>
              <ItemOptions />
            </Grid>
            <Grid item xs={6}>
              <ItemOptions />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default ProductOrderCard;
