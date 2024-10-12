import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import MoneyChenge from './MoneyChenge';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { type money } from '@/types';

interface CollectedChengeProps {
  // おつり
  chenge: number;
  oturiMoney: money;
  setOturiMoney: React.Dispatch<React.SetStateAction<money>>;
  todayMoney: money | undefined;
}
const CollectedChenge = ({ chenge, oturiMoney, setOturiMoney, todayMoney }: CollectedChengeProps) => {
  // おつりの金額から貨幣の数を出す関数
  function chengeQty(chengeAmount: number) {
    // setMoneyFncを使うための下準備
    type moneyKeyType = 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000;
    const moneyKey: moneyKeyType[] = [5000, 1000, 500, 100, 50, 10, 5, 1];
    // denominationsはresultのキーになる
    moneyKey.forEach((e) => {
      const count = Math.floor(chengeAmount / e);
      if (todayMoney !== undefined) {
        if (count > todayMoney[e]) {
          setMoneyFnc(todayMoney[e], e, setOturiMoney);
          // eslint-disable-next-line no-param-reassign
          chengeAmount -= todayMoney[e] * e; // 残りのおつりを次に回す
          // お釣りが払えない場合
          if (e === 1) {
            alert('お釣りが払えません');
          }
        } else {
          setMoneyFnc(count, e, setOturiMoney);
          // eslint-disable-next-line no-param-reassign
          chengeAmount %= e; // 残りのおつりを次に回す
        }
      }
    });
  }
  useEffect(() => {
    chengeQty(chenge);
  }, [todayMoney]);
  return (
    <div>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyChenge
            ChengeCount={oturiMoney[1]}
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_1.svg?alt=media&token=de4bbc5c-7da0-47da-ac91-fff8e3e8ddfb"
          />
          <MoneyChenge
            ChengeCount={oturiMoney[5]}
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_5.svg?alt=media&token=07c1ae6c-a5fc-46fa-ba66-0a65c24c31bd"
          />
          <MoneyChenge
            ChengeCount={oturiMoney[10]}
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_10.svg?alt=media&token=ac483c6f-54c7-42d3-a6fa-2d7b560f6241"
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyChenge
            ChengeCount={oturiMoney[50]}
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_50.svg?alt=media&token=eab3f6fa-5b3d-4061-af99-0a1612f0aeaa"
          />
          <MoneyChenge
            ChengeCount={oturiMoney[100]}
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_100.svg?alt=media&token=085aa6f7-c6af-4a81-9d87-9a196f026515"
          />
          <MoneyChenge
            ChengeCount={oturiMoney[500]}
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_500.svg?alt=media&token=c079fcb5-2410-48fd-9497-63e1cb04871c"
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem' }}>
        <MoneyChenge
          ChengeCount={oturiMoney[1000]}
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_1000.svg?alt=media&token=19afad4a-30f6-4703-a609-c32be0a84d32"
        />
        <MoneyChenge
          ChengeCount={oturiMoney[5000]}
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_5000.svg?alt=media&token=261012e4-95b0-4c6a-a124-ea225256edef"
        />
        <MoneyChenge
          ChengeCount={0}
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_10000.svg?alt=media&token=5d30b61d-653b-486a-9c97-e7fa5dec4834"
        />
      </Box>
    </div>
  );
};

export default CollectedChenge;
