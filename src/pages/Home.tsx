
import { useOrderList } from '../utils/OrderList';

const Home = () => {

    const order = useOrderList();

    console.log('orderData:'+order.data);
    console.log('orderStatus:'+order.status);

    console.log('orderID:'+order.data?.map((o) => o.id));
    console.log('orderIteName:'+order.data?.map((o) => o.item.map((i) => i.name)));
    console.log('orderItemPrice:'+order.data?.map((o) => o.item.map((i) => i.price)));
    console.log('orderItemOptionsName:'+order.data?.map((o) => o.item.map((i) => i.options.map((opt) => opt.name))));
    console.log('orderItemOptionsPrice:'+order.data?.map((o) => o.item.map((i) => i.options.map((opt) => opt.price))));






  return (
    <div>
      <h1>注文情報</h1>
      <p>注文情報ページです</p>
    </div>
  );
};

export default Home;
