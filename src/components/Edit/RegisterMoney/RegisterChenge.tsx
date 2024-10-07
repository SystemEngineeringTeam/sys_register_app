import React, { useState } from 'react';
import { type money } from '@/types';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { Box, CardMedia, TextField } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import { moneyCountScheme } from '../../../validations/schema';

interface RegisterChengeProps {
  image: string;
  // setMoneyFncを使うためのprop
  moneyKind: 'date' | 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000 | 'total';
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>;
}
const RegisterChenge = ({ image, moneyKind, setRegisterMoney }: RegisterChengeProps) => {
  // スキーマに合っているかを管理するState
  const [schemeError, setSchemeError] = useState<boolean>(false);
  // 枚数を表示させるためのState
  const [value, setValue] = useState('');
  // テキストフィールドの入力値が変わった時に使う関数
  const handleChange = (event: { target: { value: string } }) => {
    const inputText = event.target.value;
    try {
      // moneyCountSchemeの形に合うかどうか判断
      moneyCountScheme.parse(inputText);
      // テキストフィールドを通常表示
      setSchemeError(false);
      // number型にしたinputTextの値をmoneyオブジェクトにセットする
      setMoneyFnc(Number.parseInt(inputText, 10), moneyKind, setRegisterMoney);
      // 入力フィールドの値を入力値にする
      setValue(inputText);
    } catch (error) {
      // moneyCountSchemeの形に合わない場合はこちらを実行
      // テキストフィールドをエラー表示
      setSchemeError(true);
    }
    return inputText;
  };
  return (
    <div>
      <Box
        sx={{
          userSelect: 'none',
          border: 1,
          width: { xs: '7rem', sm: '9rem' },
          height: { xs: '11rem', sm: '11rem' },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            display: 'flex',
            margin: 'auto',
            height: '40%',
            width: '100%',
            objectFit: 'fill',
            position: 'relative',
          }}
        />
        <Box
          sx={{
            marginTop: '0.5rem',
          }}
        >
          <TextField
            // booleanでtrueなら赤くエラー表示
            error={schemeError}
            helperText="正の整数値を入力"
            label="枚数"
            onChange={(e) => {
              handleChange(e);
            }}
            style={{ fontSize: '10rem' }}
            type="number"
            value={value}
          />
        </Box>
      </Box>
    </div>
  );
};
export default RegisterChenge;
