import OrderNumber from '../OrderNumber';
import CollectedMoneyPaid from './CollectedMoneyPaid';
import { Box } from '@mui/material';
import WritePaidSumMoney from './WritePaidSumMoney';
import WriteNotEnoughMoney from './WriteNotEnoughMoney';
import BackButton from './BackButton';
import OkButton from './OkButton';

const OrderPayment = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* OrderNumberはマージ終わったらsxを記入する */}
      {/* 注文番号 */}
      <Box
        sx={{
          position: 'fixed',
          top: { xs: '4rem', sm: '4.5rem', md: '4.5rem' },
          right: 10,
        }}
      >
        <OrderNumber />
      </Box>

      {/* 通貨 */}
      <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
        <CollectedMoneyPaid />
        <Box sx={{ marginTop: { sm: '15rem', md: '10rem' } }}>
          {/* お支払いと合計金額 */}
          <WritePaidSumMoney />
          <Box sx={{ border: 1 }} />
          {/* おつり */}
          <WriteNotEnoughMoney />
          <Box sx={{ display: 'flex', margin: '1rem' }}>
            <Box>
              <BackButton />
            </Box>
            <Box sx={{ marginLeft: '4rem' }}>
              <OkButton />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderPayment;
