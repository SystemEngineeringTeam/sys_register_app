import { Box } from '@mui/material';
import React from 'react';
import RegisterChenge from './RegisterChenge';
// eslint-disable-next-line no-restricted-imports
import { type money } from '../../../types/index';

interface CollectedRegisterChengeProps {
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>;
}
const CollectedRegisterChenge = ({ setRegisterMoney }: CollectedRegisterChengeProps) => {
  return (
    <div>
      <Box sx={{ border: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <RegisterChenge
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_1.svg?alt=media&token=de4bbc5c-7da0-47da-ac91-fff8e3e8ddfb"
            moneyKind={1}
            setRegisterMoney={setRegisterMoney}
          />
          <RegisterChenge
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_5.svg?alt=media&token=07c1ae6c-a5fc-46fa-ba66-0a65c24c31bd"
            moneyKind={5}
            setRegisterMoney={setRegisterMoney}
          />
          <RegisterChenge
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_10.svg?alt=media&token=ac483c6f-54c7-42d3-a6fa-2d7b560f6241"
            moneyKind={10}
            setRegisterMoney={setRegisterMoney}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <RegisterChenge
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_50.svg?alt=media&token=eab3f6fa-5b3d-4061-af99-0a1612f0aeaa"
            moneyKind={50}
            setRegisterMoney={setRegisterMoney}
          />
          <RegisterChenge
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_100.svg?alt=media&token=085aa6f7-c6af-4a81-9d87-9a196f026515"
            moneyKind={100}
            setRegisterMoney={setRegisterMoney}
          />
          <RegisterChenge
            image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_500.svg?alt=media&token=c079fcb5-2410-48fd-9497-63e1cb04871c"
            moneyKind={500}
            setRegisterMoney={setRegisterMoney}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem', border: 2 }}>
        <RegisterChenge
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_1000.svg?alt=media&token=19afad4a-30f6-4703-a609-c32be0a84d32"
          moneyKind={1000}
          setRegisterMoney={setRegisterMoney}
        />
        <RegisterChenge
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_5000.svg?alt=media&token=261012e4-95b0-4c6a-a124-ea225256edef"
          moneyKind={5000}
          setRegisterMoney={setRegisterMoney}
        />
        <RegisterChenge
          image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fmoney%2Fmoney_10000.svg?alt=media&token=5d30b61d-653b-486a-9c97-e7fa5dec4834"
          moneyKind={10000}
          setRegisterMoney={setRegisterMoney}
        />
      </Box>
    </div>
  );
};

export default CollectedRegisterChenge;
