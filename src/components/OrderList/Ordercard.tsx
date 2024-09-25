import { Grid } from "@mui/material";
import ProductOrderCard from "../ProductOrderCard";
import { order } from "../../types";

interface OrdercardProps {
    orders: order[];
}

const Ordercard = ({orders}:OrdercardProps) => {
  return (
    <Grid container spacing={2}>
    {orders.map((order) => (
      <Grid item xs={4} sm={3} key={order.id}> {/* レスポンシブ対応 */}
        <ProductOrderCard items={order.item} qty={order.qty} options={order.options} />
      </Grid>
    ))}
  </Grid>
  );
}

export default Ordercard;