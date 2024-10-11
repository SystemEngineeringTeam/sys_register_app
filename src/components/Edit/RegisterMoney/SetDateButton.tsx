import { theme } from '@/themes/theme';
import { type money } from '@/types';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { Button, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

interface SetMoneyButtonProps {
  to: string;
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>;
  registerMoney: money;
}

const SetDateButton = ({ to, setRegisterMoney, registerMoney }: SetMoneyButtonProps) => {
  const handleChange = () => {
    // ボタンを押した時にdateを更新
    // 現在の日付の00:00:00のミリ秒を取得する
    const today = new Date();
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const milliseconds = todayMidnight.getTime();
    setMoneyFnc(milliseconds, 'date', setRegisterMoney);
    console.log('money??', registerMoney);
  };
  return (
    <ThemeProvider theme={theme}>
      <Link state={{ registerMoney }} to={to}>
        <Button
          color="ok"
          onClick={handleChange}
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

export default SetDateButton;
