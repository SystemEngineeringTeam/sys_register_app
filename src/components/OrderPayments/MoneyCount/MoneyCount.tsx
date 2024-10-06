// eslint-disable-next-line no-restricted-imports
import OrderNumber from '../../OrderNumber';
import { Box } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import WriteNotEnoughMoney from '../WriteNotEnoughMoney';

import OkButton from '../OkButton';
import CollectedChenge from './CollectedChenge';
import { useLocation } from 'react-router-dom';

interface State {
  totalPayment: number;
  totalAmount: number;
  id: string;
}
const MoneyCount = () => {
  const location = useLocation();
  const { totalAmount, totalPayment, id } = location.state as State;
  return (
    <Box sx={{ display: 'flex', userSelect: 'none' }}>
      {/* 注文番号 */}
      <Box
        sx={{
          position: 'fixed',
          top: { xs: '4rem', sm: '4.5rem', md: '4.5rem' },
          right: 10,
        }}
      >
        <OrderNumber id={id} />
      </Box>
      {/* 通貨と合計金額、おつり */}
      <Box sx={{ display: { xs: 'block', sm: 'flex', margin: '1rem' } }}>
        {/* 通貨を表示 */}
        <CollectedChenge chenge={totalPayment - totalAmount} />
        <Box sx={{ marginTop: { sm: '25rem', md: '20rem' } }}>
          {/* おつり */}
          <Box sx={{ margin: '1rem', fontSize: '1.5rem', right: '2rem', bottom: '5rem', position: 'fixed' }}>
            <WriteNotEnoughMoney totalAmount={totalAmount} totalPayment={totalPayment} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', margin: '1rem', position: 'fixed', right: '2rem', bottom: '1rem' }}>
          <Box sx={{ marginLeft: '4rem' }}>
            {/* OKボタン */}
            <OkButton id={id} to="/order" totalAmount={totalAmount} totalPayment={totalPayment} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MoneyCount;
