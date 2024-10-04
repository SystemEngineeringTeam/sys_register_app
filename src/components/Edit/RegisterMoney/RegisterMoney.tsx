import { Box } from '@mui/material';
import CollectedRegisterChenge from './CollectedRegisterChenge';
import { useEffect, useState } from 'react';
import { type money } from '@/types';
import BackButton from '@/components/OrderPayments/BackButton';
import SetDateButton from './SetDateButton';

const RegisterMoney = () => {
  // money型のState
  // undefindにならないように初期化
  const [registerMoney, setRegisterMoney] = useState<money>({
    date: 0,
    '10000': 0,
    '5000': 0,
    '1000': 0,
    '500': 0,
    '100': 0,
    '50': 0,
    '10': 0,
    '5': 0,
    '1': 0,
    total: 0,
  });
  // 確認用のuseEffect
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(registerMoney);
  }, [registerMoney]);
  return (
    <Box sx={{ display: 'flex' }}>
      {/* 通貨と合計金額、おつり */}
      <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
        {/* 通貨を表示 */}
        <CollectedRegisterChenge setRegisterMoney={setRegisterMoney} />
        <Box sx={{ marginTop: { sm: '25rem', md: '20rem' } }}>
          {/* 合計金額 */}
          <Box
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
              marginLeft: '4rem',
            }}
          >
            合計金額{registerMoney.total}
          </Box>
          <Box sx={{ display: 'flex', margin: '1rem' }}>
            <Box>
              {/* 戻るボタン */}
              <BackButton id="" to="/" />
            </Box>
            <Box sx={{ marginLeft: '4rem' }}>
              {/* OKボタン 押したらRegisterMoneyのdateが更新される  */}
              <SetDateButton id="" setRegisterMoney={setRegisterMoney} to="/" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterMoney;
