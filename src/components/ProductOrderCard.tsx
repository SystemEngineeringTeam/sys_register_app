import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemOptions from './ItemOptions';

const ProductOrderCard = () => {
  return (
    <div>
      <Box>
        <Card>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h2">ねぎま</Typography>
            <Typography component="h2">4</Typography>
          </CardContent>
          <ItemOptions />
        </Card>
      </Box>
    </div>
  );
};

export default ProductOrderCard;
