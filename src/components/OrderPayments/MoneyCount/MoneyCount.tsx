// eslint-disable-next-line no-restricted-imports
import OrderNumber from '../../OrderNumber';
import { Box } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import WriteNotEnoughMoney from '../WriteNotEnoughMoney';
// eslint-disable-next-line no-restricted-imports
import BackButton from '../BackButton';
// eslint-disable-next-line no-restricted-imports
import OkButton from '../OkButton';
import CollectedChenge from './CollectedChenge';

interface OrderPaymentProps {
  totalPayment: number;
  totalAmount: number;
}
// お釣り画面を表示する
const MoneyCount = ({ totalPayment, totalAmount }: OrderPaymentProps) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
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
      </Box>
      <Box sx={{ display: 'flex' }}>
        <CollectedChenge chenge={totalPayment - totalAmount} />
      </Box>
      {/* 通貨と合計金額、おつり */}
      <Box sx={{ display: { xs: 'block', sm: 'flex' }, position: 'fixed', right: '2rem', bottom: '2rem' }}>
        {/* 通貨を表示 */}
        <Box sx={{ marginTop: { sm: '25rem', md: '20rem' } }}>
          {/* おつり */}
          <WriteNotEnoughMoney totalAmount={totalAmount} totalPayment={totalPayment} />
          <Box sx={{ display: 'flex', margin: '1rem' }}>
            <Box>
              {/* 戻るボタン */}
              <BackButton />
            </Box>
            <Box sx={{ marginLeft: '4rem' }}>
              {/* OKボタン */}
              <OkButton />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MoneyCount;
