import MoneyPaid from '../components/MoneyPaid';
import OrderNumber from '../components/OrderNumber';

const Order = () => (
  <div>
    <h1>Home</h1>
    <p>Homeページです</p>
    {/* 注文番号のtest用 あとで消す */}
    <OrderNumber/>
    <MoneyPaid image = '/money_1.svg'/>
    <MoneyPaid image = '/money_5.svg'/>
    <MoneyPaid image = '/money_10.svg'/>
    <MoneyPaid image = '/money_50.svg'/>
    <MoneyPaid image = '/money_100.svg'/>
    <MoneyPaid image = '/money_500.svg'/>
    <MoneyPaid image = '/money_1000.svg'/>
    <MoneyPaid image = '/money_5000.svg'/>
    <MoneyPaid image = '/money_10000.svg'/>
  </div>
);

export default Order;
