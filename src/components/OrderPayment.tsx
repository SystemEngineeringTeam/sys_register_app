import OrderNumber from './OrderNumber';
import CollectedMoneyPaid from './CollectedMoneyPaid';
import { Box } from '@mui/material';
import WritePaidSumMoney from './WritePaidSumMoney';
import WriteNotEnoughMoney from './WriteNotEnoughMoney';
import { BorderAll } from '@mui/icons-material';

const OrderPayment = () => {
  return (
    <Box sx={{display:'flex'}}>
      {/* OrderNumberはマージ終わったらsxを記入する */}
      {/* 注文番号 */}
      <OrderNumber />
      {/* 通貨 */}
      <CollectedMoneyPaid />
      <Box sx={{marginTop:'10rem',marginLeft:'2rem'}}>
        {/* お支払いと合計金額 */}
        <WritePaidSumMoney />

        <Box sx={{ border: 1 }}></Box>
        {/* おつり */}
        <WriteNotEnoughMoney />
      </Box>
    </Box>
  );
};

export default OrderPayment;
