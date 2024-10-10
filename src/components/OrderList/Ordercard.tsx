import { Grid } from '@mui/material';
import ProductOrderCard from '../ProductOrderCard';
import { type order } from '../../types';

interface OrdercardProps {
  orders: order[];
}

const Ordercard = ({ orders }: OrdercardProps) => {
  return (
    <Grid container spacing={2}>
      {orders.map((order) => (
        <Grid key={order.id} item sm={3} xs={4}>
          {' '}
          {/* レスポンシブ対応 */}
          <ProductOrderCard items={order.item} options={order.options} qty={order.qty} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Ordercard;
