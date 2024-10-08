// eslint-disable-next-line no-restricted-imports
import OrderNumber from '../OrderNumber';
import CollectedMoneyPaid from './CollectedMoneyPaid';
import { Box, Stack } from '@mui/material';
import WritePaidSumMoney from './WritePaidSumMoney';
import WriteNotEnoughMoney from './WriteNotEnoughMoney';
import BackButton from './BackButton';
import OkButton from './OkButton';
import { useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import { useOrderCollection } from '../../firebase/useOrderCollection';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line no-restricted-imports
import { idToTotalAmount } from '../../utils/accountingUtils';
import TiketCount from './MoneyCount/TiketCount';
import DiscountAmount from './MoneyCount/DiscountAmount';
import { type money } from '@/types';

interface State {
  id: string;
}
const OrderPayment = () => {
  const location = useLocation();
  const { id } = location.state as State;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [paymentMoney, setPaymentMoney] = useState<money>({
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
  const orderCollectionId = id;

  // ここのdataは固定名
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useOrderCollection();
  // 貨幣の数を数えるuseState

  const [tiketCount100, setTiketCount100] = useState(0);
  const [discount100, setDiscount100] = useState(0);
  const [discount50, setDiscount50] = useState(0);
  // const [totalAmount, setTotalAmount] = useState(0);
  // // お客様が支払ったお金を管理するuseEffect
  // useEffect(() => {
  //   // setMoneyFncを使うための下準備
  //   type moneyKeyType = 'date' | 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000 | 'total';
  //   // mapで展開したい要素
  //   const moneyKey: moneyKeyType[] = [1, 5, 10, 50, 100, 1000, 5000, 10000, 'total'];
  //   moneyKey.forEach((e) => {
  //     // setMoneyFnc(, e, setPaymentMoney);
  //   });
  // }, []);

  // 注文から合計金額を算出する関数 DiscountAmount
  function getTotalAmount() {
    // data: orderCollection[] | undefinedの型整形
    if (data !== undefined) {
      // 割引関係はここに-していく
      return idToTotalAmount(orderCollectionId, data) - discount100 * 100 - discount50 * 50;
    }
    // orderCollectionIdから合計金額を出す関数
    return -1;
  }
  return (
    <Box sx={{ display: 'flex' }}>
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
      <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
        {/* 通貨を表示 */}
        <Stack spacing="2rem" sx={{ display: 'block', margin: '1rem', marginLeft: '10%' }}>
          <CollectedMoneyPaid setPaymentMoney={setPaymentMoney} />
          {/* チケット、割引 */}
          <Box sx={{ display: 'flex' }}>
            <TiketCount
              count={tiketCount100}
              image="public/tiket_100.svg"
              setCount={setTiketCount100}
              totalAmount={getTotalAmount()}
            />
            <DiscountAmount
              count={discount50}
              discountAmount={50}
              setCount={setDiscount50}
              // チケットで支払った値段
              tiketAmount={tiketCount100 * 100}
              totalAmount={getTotalAmount()}
            />
            <DiscountAmount
              count={discount100}
              discountAmount={100}
              setCount={setDiscount100}
              // チケットで支払った値段
              tiketAmount={tiketCount100 * 100}
              totalAmount={getTotalAmount()}
            />
          </Box>
        </Stack>
        {/* 支払い、合計金額、お釣り、戻る・OKボタン */}
        <Box
          sx={{
            fontSize: '1.5rem',
            right: '2rem',
            bottom: { xs: '3.5rem', sm: '5rem' },
            position: 'fixed',
          }}
        >
          {/* お支払いと合計金額 */}
          <WritePaidSumMoney totalAmount={getTotalAmount()} totalPayment={paymentMoney.total + tiketCount100 * 100} />
          <Box sx={{ border: 1 }} />
          {/* おつり */}
          <WriteNotEnoughMoney totalAmount={getTotalAmount()} totalPayment={paymentMoney.total + tiketCount100 * 100} />
          <Box sx={{ display: 'flex', margin: '1rem', position: 'fixed', right: '2rem', bottom: '1rem' }}>
            <Box>
              {/* 戻るボタン */}
              <BackButton id={id} to="/order" />
            </Box>
            <Box sx={{ marginLeft: '4rem' }}>
              {/* OKボタン */}
              <OkButton
                id={id}
                paymentMoney={paymentMoney}
                to="/paychange"
                totalAmount={getTotalAmount()}
                totalPayment={paymentMoney.total + tiketCount100 * 100}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderPayment;
