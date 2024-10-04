import { theme } from '@/themes/theme';
import { type money } from '@/types';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { Button, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

interface SetMoneyButtonProps {
  id: string;
  to: string;
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>;
}

const SetMoneyButton = ({ id, to, setRegisterMoney }: SetMoneyButtonProps) => {
  const handleChange = () => {
    const date = new Date();
    setMoneyFnc(date.getTime(), 'date', setRegisterMoney);
  };
  return (
    <ThemeProvider theme={theme}>
      <Link state={{ id }} to={to}>
        <Button
          color="ok"
          onClick={handleChange}
          sx={{
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

export default SetMoneyButton;
