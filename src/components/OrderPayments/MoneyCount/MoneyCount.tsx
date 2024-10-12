// eslint-disable-next-line no-restricted-imports
import OrderNumber from '../../OrderNumber';
import { Box } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import WriteNotEnoughMoney from '../WriteNotEnoughMoney';
import CollectedChenge from './CollectedChenge';
import { useLocation } from 'react-router-dom';
import { useMoney } from '@/firebase/useMoney';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { type money } from '@/types';
import { useEffect, useState } from 'react';
import MonChenOkButton from './MonChenOkButton';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/login/AdminLogin';

interface State {
  totalPayment: number;
  totalAmount: number;
  id: string;
  paymentMoney: money;
}
const MoneyCount = () => {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }
  const { money } = useMoney(user);
  const location = useLocation();
  const { totalAmount, totalPayment, id, paymentMoney } = location.state as State;
  // 現在の日付の00:00:00のミリ秒を取得する
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const milliseconds = todayMidnight.getTime();
  // console.log(milliseconds);
  const todayMoney = money?.find((e) => {
    return e.date === milliseconds;
  });
  // updateMoneyに入れるnewMoney
  const [newMoney, setNewMoney] = useState<money>({
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
  // お釣りを数えるためのもの
  const [oturiMoney, setOturiMoney] = useState<money>({
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
    tiket100: 0,
    total: 0,
  });
  // setMoneyFncを使うための下準備
  type moneyKeyType = 'date' | 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000 | 'tiket100' | 'total';
  // mapで展開したい要素
  const moneyKey: moneyKeyType[] = [1, 5, 10, 50, 500, 100, 1000, 5000, 10000, 'tiket100', 'total'];
  // お釣りが決まったらnewMoneyをセット
  useEffect(() => {
    if (todayMoney !== undefined) {
      moneyKey.forEach((e) => {
        setMoneyFnc(todayMoney[e] + paymentMoney[e] - oturiMoney[e], e, setNewMoney);
      });
    }
  }, [oturiMoney, todayMoney]);
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
        <CollectedChenge
          chenge={totalPayment - totalAmount}
          oturiMoney={oturiMoney}
          setOturiMoney={setOturiMoney}
          todayMoney={todayMoney}
        />
        <Box sx={{ marginTop: { sm: '25rem', md: '20rem' } }}>
          {/* おつり */}
          <Box sx={{ margin: '1rem', fontSize: '1.5rem', right: '2rem', bottom: '5rem', position: 'fixed' }}>
            <WriteNotEnoughMoney totalAmount={totalAmount} totalPayment={totalPayment} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', margin: '1rem', position: 'fixed', right: '2rem', bottom: '1rem' }}>
          <Box sx={{ marginLeft: '4rem' }}>
            {/* OKボタン */}
            <MonChenOkButton
              id={id}
              newMoney={newMoney}
              to="/order"
              totalAmount={totalAmount}
              totalPayment={totalPayment}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MoneyCount;
