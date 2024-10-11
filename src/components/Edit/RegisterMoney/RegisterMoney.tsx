import { Box } from '@mui/material';
import CollectedRegisterChenge from './CollectedRegisterChenge';
import { useEffect, useState } from 'react';
import { type money } from '@/types';
import BackButton from '@/components/OrderPayments/BackButton';
import SetDateButton from './SetDateButton';
import MoneyMap from './MoneyMap';
import { updateMoney } from '@/firebase/useMoney';
import { useLocation } from 'react-router-dom';

const RegisterMoney = () => {
  // 現在の日付の00:00:00のミリ秒を取得する
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const milliseconds = todayMidnight.getTime();
  // money型のState
  // undefindにならないように初期化
  const [registerMoney, setRegisterMoney] = useState<money>({
    date: milliseconds,
    '10000': 0,
    '5000': 0,
    '1000': 0,
    '500': 0,
    '100': 0,
    '50': 0,
    '10': 0,
    '5': 0,
    '1': 0,
    tiket100: 0,
    total: 0,
  });
  return (
    <Box sx={{ display: 'flex' }}>
      {/* 通貨と合計金額、おつり */}
      <Box sx={{ display: { xs: 'block', sm: 'flex', margin: '1rem' } }}>
        {/* 通貨を表示 */}
        <CollectedRegisterChenge setRegisterMoney={setRegisterMoney} />
        <Box>
          {/* 合計金額 */}
          <Box sx={{ margin: '1rem', fontSize: '1.5rem', right: '2rem', position: 'fixed' }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <MoneyMap registerMoney={registerMoney} />
            </Box>

            <Box
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                marginLeft: '4rem',
                textAlign: 'right',
              }}
            >
              合計金額 : {registerMoney.total}円
            </Box>
            <Box sx={{ display: 'flex', margin: '1rem', position: 'fixed', right: '2rem', bottom: '1rem' }}>
              <Box>
                {/* 戻るボタン */}
                <BackButton id="" to="/admin" />
              </Box>
              <Box sx={{ marginLeft: '4rem' }}>
                {/* OKボタン 押したらRegisterMoneyのdateが更新される  */}
                <SetDateButton registerMoney={registerMoney} setRegisterMoney={setRegisterMoney} to="/admin" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterMoney;
