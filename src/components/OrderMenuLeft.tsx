import { Box } from '@mui/material';
import OrderMenueContena from './OrderMenueContena';

interface OrderMenueLeftProps {
  processedoptions: {
    name: string | null;
    price: number | null;
  };
  menuqty: {
    qty: number | null;
  };
  customize: {
    name: string;
    price: number;
  };
}

const OrderMenuLeft = ({ processedoptions, menuqty, customize }: OrderMenueLeftProps) => {
  // const orders = [
  //   1, 2, 3, 4, 4, 5, 4, 231, 3245, 324, 332, 344, 223, 421, 324, 321, 123, 242, 234, 231, 324, 23, 4, 234, 443, 244,
  //   232,
  // ];

  console.log('processedOptions:' + processedoptions);
  console.log('menuqty:' + menuqty);

  return (
    <div>
      <Box>
        <Box>
          <OrderMenueContena
            ordername={processedoptions.name || ''}
            orderprice={processedoptions.price || 0}
            orderimg={processedoptions.name || ''}
            menuqty={menuqty.qty || 0} // menuqtyの値を渡す
            customizename={customize.name || ''} // カスタマイズ名を渡す（カスタマイズがある場合）
            customizeprice={customize.price || 0} // カスタマイズ価格を渡す（カスタマイズがある場合）
          />
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;
