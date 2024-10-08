import { Button, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-restricted-imports
import { useOrderUpdate } from '../../firebase/setProcess';
// eslint-disable-next-line no-restricted-imports
import { theme } from '../../themes/theme';
import { type money } from '@/types';

interface OkButtonProps {
  id: string;
  totalPayment: number;
  totalAmount: number;
  to: string;
  paymentMoney: money;
}

const OkButton = ({ id, totalAmount, totalPayment, to, paymentMoney }: OkButtonProps) => {
  const { updateOrderStatus } = useOrderUpdate();

  const handleChange = () => {
    void updateOrderStatus(id.toString(), 'accounting');
  };

  const payChange = () => {
    return totalPayment - totalAmount >= 0;
  };

  const clickhandle = () => {
    if (!payChange()) {
      alert('お金が足りません');
    } else {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ OkButton ~ clickhandle ~ payChange', payChange());
    }
    if (to === '/order') {
      handleChange();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Link state={{ id, totalAmount, totalPayment, paymentMoney }} to={payChange() ? to : '#'}>
        <Button
          color="ok"
          onClick={clickhandle}
          sx={{
            userSelect: 'none',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            width: { xs: '6rem', sm: '8rem', md: '10rem' },
            height: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          }}
          variant="contained"
        >
          OK
        </Button>
      </Link>
    </ThemeProvider>
  );
};

export default OkButton;
