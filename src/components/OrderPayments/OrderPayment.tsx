// eslint-disable-next-line no-restricted-imports
import OrderNumber from '../OrderNumber';
import CollectedMoneyPaid from './CollectedMoneyPaid';
import { Box } from '@mui/material';
import WritePaidSumMoney from './WritePaidSumMoney';
import WriteNotEnoughMoney from './WriteNotEnoughMoney';
import BackButton from './BackButton';
import OkButton from './OkButton';
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import { idToTotalAmount } from '../../utils/accountingUtils';
// eslint-disable-next-line no-restricted-imports
import { useOrderCollection } from '../../firebase/useOrderCollection';
import { useLocation } from 'react-router-dom';

interface State {
  id: string;
}
const OrderPayment = () => {
  const location = useLocation();
  const { id } = location.state as State;

  const orderCollectionId = id;

  // ここのdataは固定名
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useOrderCollection();
  // 貨幣の数を数えるuseState
  const [moneyCount1, setMoneyCount1] = useState(0);
  const [moneyCount5, setMoneyCount5] = useState(0);
  const [moneyCount10, setMoneyCount10] = useState(0);
  const [moneyCount50, setMoneyCount50] = useState(0);
  const [moneyCount100, setMoneyCount100] = useState(0);
  const [moneyCount500, setMoneyCount500] = useState(0);
  const [moneyCount1000, setMoneyCount1000] = useState(0);
  const [moneyCount5000, setMoneyCount5000] = useState(0);
  const [moneyCount10000, setMoneyCount10000] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  // const [totalAmount, setTotalAmount] = useState(0);
  // お客様が支払ったお金を管理するuseEffect
  useEffect(() => {
    setTotalPayment(
      moneyCount1 +
        moneyCount10 * 10 +
        moneyCount100 * 100 +
        moneyCount1000 * 1000 +
        moneyCount10000 * 10000 +
        moneyCount5 * 5 +
        moneyCount50 * 50 +
        moneyCount500 * 500 +
        moneyCount5000 * 5000,
    );
  }, [
    moneyCount1,
    moneyCount10,
    moneyCount100,
    moneyCount1000,
    moneyCount10000,
    moneyCount5,
    moneyCount50,
    moneyCount500,
    moneyCount5000,
  ]);
  // 注文から合計金額を算出する関数
  function getTotalAmount() {
    // data: orderCollection[] | undefinedの型整形
    if (data === undefined) {
      return -1;
    }
    // orderCollectionIdから合計金額を出す関数
    return idToTotalAmount(orderCollectionId, data);
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

      {/* 通貨と合計金額、おつり */}
      <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
        {/* 通貨を表示 */}
        <CollectedMoneyPaid
          moneyCount1={moneyCount1}
          moneyCount10={moneyCount10}
          moneyCount100={moneyCount100}
          moneyCount1000={moneyCount1000}
          moneyCount10000={moneyCount10000}
          moneyCount5={moneyCount5}
          moneyCount50={moneyCount50}
          moneyCount500={moneyCount500}
          moneyCount5000={moneyCount5000}
          setMoneyCount1={setMoneyCount1}
          setMoneyCount10={setMoneyCount10}
          setMoneyCount100={setMoneyCount100}
          setMoneyCount1000={setMoneyCount1000}
          setMoneyCount10000={setMoneyCount10000}
          setMoneyCount5={setMoneyCount5}
          setMoneyCount50={setMoneyCount50}
          setMoneyCount500={setMoneyCount500}
          setMoneyCount5000={setMoneyCount5000}
        />
        <Box sx={{ marginTop: { sm: '15rem', md: '10rem' } }}>
          {/* お支払いと合計金額 */}
          <WritePaidSumMoney totalAmount={getTotalAmount()} totalPayment={totalPayment} />
          <Box sx={{ border: 1 }} />
          {/* おつり */}
          <WriteNotEnoughMoney totalAmount={getTotalAmount()} totalPayment={totalPayment} />
          <Box sx={{ display: 'flex', margin: '1rem' }}>
            <Box>
              {/* 戻るボタン */}
              <BackButton to="/order" id={id} />
            </Box>
            <Box sx={{ marginLeft: '4rem' }}>
              {/* OKボタン */}
              <OkButton id={id} totalAmount={getTotalAmount()} totalPayment={totalPayment} to="/paychange" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderPayment;
