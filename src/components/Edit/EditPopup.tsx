import { Box, Button, Card, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CancelButton from '@/components/managementPopup/CancelButton';
import { useState } from 'react';
import { type z } from 'zod';
import { ControllerRenderProps, FieldErrors, UseFormSetValue } from 'react-hook-form';

interface EditPopupProps {
  //  現在の名前
  currentName: string;
  // 商品名、値段などの変更したいもの
  editName: string;
  setOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
  field: ControllerRenderProps<
    {
      itemName: string;
      itemPrice: number;
    },
    'itemName'
  >;
  errors: FieldErrors<{
    itemName: string;
    itemPrice: number;
  }>;
  setValue: UseFormSetValue<{
    itemName: string;
    itemPrice: number;
  }>;
  // value: string | undefined;
  // setValue: React.Dispatch<React.SetStateAction<string>> | undefined;
  // Schema: z.ZodString | z.ZodEffects<z.ZodString, string, string>;
}
const EditPopup = ({ currentName, editName, setOnScreen, field, errors, setValue }: EditPopupProps) => {
  // // スキーマに合っているかを管理するState
  // const [schemeError, setSchemeError] = useState<boolean>(false);
  // const handleChange = (event: { target: { value: string } }) => {
  //   const inputText = event.target.value;
  //   try {
  //     // moneyCountSchemeの形に合うかどうか判断
  //     Schema.parse(inputText);
  //     // テキストフィールドを通常表示
  //     setSchemeError(false);
  //     // 入力フィールドの値を入力値にする
  //     setValue(inputText);
  //   } catch (error) {
  //     // moneyCountSchemeの形に合わない場合はこちらを実行
  //     // テキストフィールドをエラー表示
  //     setSchemeError(true);
  //   }
  //   return inputText;
  // };
  return (
    <Box>
      {/* 画面全体を半透明の黒で覆う */}
      <Box
        sx={{
          userSelect: 'none',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: '0',
          left: '0',
          background: 'black',
          opacity: '0.5',
        }}
      />
      {/* 名前編集カード */}
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // 半透明の要素よりも前に配置
          zIndex: '1',
          minHeight: { xs: '25rem', sm: '25rem' },
          minWidth: { xs: '25rem', sm: '30rem' },
        }}
      >
        {/* バツボタン */}
        <Button
          onClick={() => {
            setOnScreen(false);
          }}
          sx={{ position: 'fixed', right: '0' }}
        >
          <ClearIcon style={{ fontSize: '2.5rem' }} />
        </Button>
        <Box sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, margin: { xs: '1.5rem', sm: '3rem' } }}>
          {/* 現在の商品名 : つくね のように表示される */}
          <Box>
            現在の{editName} : {currentName}
          </Box>
          <Box sx={{ marginTop: '0.5rem' }}>変更後の{editName}</Box>
          {/* 入力欄 */}
          <Box sx={{ marginLeft: '2rem' }}>
            <TextField
              // booleanでtrueなら赤くエラー表示
              {...field}
              error={!!errors.itemName}
              helperText={errors.itemName?.message}
              label="商品名"
              onChange={(e) => {
                //Nanだったときは０を入れる  10進数で
                // field.onChange(e);
                setValue("itemName",`${e.target.value}`,{shouldValidate: true});
                console.log('field', field.value);
              }}
              style={{ fontSize: '10rem' }}
            />
          </Box>
          <Box sx={{ display: 'flex', position: 'fixed', right: '0', padding: '1rem' }}>
            {/* キャンセル、保存ボタン */}
            {/* 他のコンポーネントから持ってくるまで仮置き */}
            <CancelButton selectedChangeCancel setSelectedChangeCancel={setOnScreen} />
            <Button >保存</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default EditPopup;
