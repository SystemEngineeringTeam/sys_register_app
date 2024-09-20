import { Box, Typography, Card, CardContent, Button, Grid, Stack } from '@mui/material';
import ProductOrderCard from './ProductOrderCard';
import { sortingOrders } from '../utils/sortingOrders';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ProductOrderContenaProps {
  key: number;
  id: number;
}

const ProductOrderContena = ({key, id}: ProductOrderContenaProps) => {

  const orders = sortingOrders(id);

  return (
    <div>
<Box sx={{ width: '100vw', mx: 0, p: 2 }}> {/* 画面横いっぱいに広げる */}
  <Card elevation={3} sx={{ width: '100%' }}> {/* カード全体もフル幅に設定 */}
    <CardContent
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',  // 幅は画面いっぱいに広げる
        p: { xs: 1, sm: 2, md: 3 } // 画面サイズごとのパディング
      }}
    >
      <Stack spacing={2} alignItems="center" sx={{ mr: 2 }}>
        <Typography component="h1" variant="h5" color="primary">{id}</Typography>

        <Button variant="contained" color="success" startIcon={<CheckCircleIcon />}>
          調理前
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {orders.map((order) => (
          <Grid item xs={4} sm={3} key={order.id}> {/* レスポンシブ対応 */}
            <ProductOrderCard items={order.item} qty={order.qty} options={order.options} />
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
</Box>

    </div>
  );
};

export default ProductOrderContena;
