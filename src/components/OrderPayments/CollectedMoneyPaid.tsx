import React from 'react';
import MoneyPaid from './MoneyPaid';
import { Box } from '@mui/material';
import { type money } from '@/types';

interface CollectedMoneyPaidProps {
  setPaymentMoney: React.Dispatch<React.SetStateAction<money>>;
}
const CollectedMoneyPaid = ({ setPaymentMoney }: CollectedMoneyPaidProps) => {
  return (
    <div>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_1.svg?alt=media&token=de4bbc5c-7da0-47da-ac91-fff8e3e8ddfb"
            num={1}
            setPaymentMoney={setPaymentMoney}
          />
          <MoneyPaid
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_5.svg?alt=media&token=07c1ae6c-a5fc-46fa-ba66-0a65c24c31bd"
            num={5}
            setPaymentMoney={setPaymentMoney}
          />
          <MoneyPaid
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_10.svg?alt=media&token=ac483c6f-54c7-42d3-a6fa-2d7b560f6241"
            num={10}
            setPaymentMoney={setPaymentMoney}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_50.svg?alt=media&token=eab3f6fa-5b3d-4061-af99-0a1612f0aeaa"
            num={50}
            setPaymentMoney={setPaymentMoney}
          />
          <MoneyPaid
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_100.svg?alt=media&token=085aa6f7-c6af-4a81-9d87-9a196f026515"
            num={100}
            setPaymentMoney={setPaymentMoney}
          />
          <MoneyPaid
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_500.svg?alt=media&token=c079fcb5-2410-48fd-9497-63e1cb04871c"
            num={500}
            setPaymentMoney={setPaymentMoney}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem' }}>
        <MoneyPaid
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_1000.svg?alt=media&token=19afad4a-30f6-4703-a609-c32be0a84d32"
          num={1000}
          setPaymentMoney={setPaymentMoney}
        />
        <MoneyPaid
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_5000.svg?alt=media&token=261012e4-95b0-4c6a-a124-ea225256edef"
          num={5000}
          setPaymentMoney={setPaymentMoney}
        />
        <MoneyPaid
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_10000.svg?alt=media&token=5d30b61d-653b-486a-9c97-e7fa5dec4834"
          num={10000}
          setPaymentMoney={setPaymentMoney}
        />
      </Box>
    </div>
  );
};

export default CollectedMoneyPaid;
