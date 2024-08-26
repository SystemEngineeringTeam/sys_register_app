import OrderPayment from "../components/OrderPayment";


const Order = () => (
  <div>
    {/* 支払い画面*/}
    <OrderPayment></OrderPayment>
  </div>
);


const Order = ( ) => {
    const orders = [1,2,3,4,4,5,4,231,3245,324,332,344,223,421,324,321,123,242,234,231,324,23,4,234,443,244,232];
  return (
    <div>
      <NumberButtonBox orders={orders}/>
      <OrderWaitPeople orders={orders}/>
    </div>
    
    )}
export default Order;