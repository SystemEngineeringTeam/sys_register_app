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
import { useAtom } from 'jotai';
// eslint-disable-next-line no-restricted-imports, import/no-cycle
import { orderCollectionAtom } from '../../firebase/FirebaseUtils';

interface OrderPaymentProps {
  orderCollectionId: string;
}
const OrderPayment = ({ orderCollectionId }: OrderPaymentProps) => {
  // orderCollectionをuseAtomで読み取り
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);
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

  function getTotalAmount() {
    switch (orderCollectionData.state) {
      case 'loading':
        return -1;

      case 'hasError':
        return -1;

      case 'hasData':
        // orderCollectionData.dataの型整形用
        if (orderCollectionData.data === null || orderCollectionData.data === undefined) {
          return -1;
        }
        // orderCollectionIdから合計金額を出す関数
        return idToTotalAmount(orderCollectionId, orderCollectionData.data);

      default:
        return -1;
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      {/* OrderNumberはマージ終わったらsxを記入する */}
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

      {/* 通貨 */}
      <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
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
              <BackButton />
            </Box>
            <Box sx={{ marginLeft: '4rem' }}>
              <OkButton />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderPayment;
