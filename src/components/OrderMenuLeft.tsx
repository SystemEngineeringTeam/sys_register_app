
import { type order } from '@/types';

import { Box } from '@mui/material';
import OrderMenueContena from './OrderMenueContena';

interface OrderMenueLeftProps {
  selectId: number;
  orderData: order[];
  setNewOrderData: React.Dispatch<React.SetStateAction<order[]>>;
  newOrderData: order[];
}

const OrderMenuLeft = ({ selectId, orderData, setNewOrderData, newOrderData }: OrderMenueLeftProps) => {
  return (
    <div>
      <Box>
        <Box>
          {orderData.map((order: order, index) => {
            return (
              <OrderMenueContena
                key={index} // keyを追加することで一意の要素とする
                index={index}
                newOrderData={newOrderData}
                selectId={selectId.toString()}
                selectMenuId={order.item.id}
                selectMenuImg={order.item.imgUrl}
                selectMenuName={order.item.name}
                selectMenuPrice={order.item.price}
                selectMenuqty={order.qty}
                selectOptions={order.options}
                selectOrder={order}
                setNewOrderData={setNewOrderData}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;
