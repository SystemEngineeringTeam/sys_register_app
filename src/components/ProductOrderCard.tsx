import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemOptions from './OrderPayments/ItemOptions';
import { Grid } from '@mui/material';
import { type items, type options } from '../types/index';

interface ProductOrderCardProps {
  items: items;
  qty: number;
  options: options[];
}

const ProductOrderCard = ({ items, qty, options }: ProductOrderCardProps) => {
  return (
    <div>
      <Box>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography component="h1">{items.name}</Typography>
            <Typography component="h1">X{qty}</Typography>
          </CardContent>

          <Grid container spacing={0}>
            <Grid item xs={12}>
              <ItemOptions options={options} />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default ProductOrderCard;
