import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import ChangeYessButton from './ChangeYessButton';
import { z } from 'zod';
import { categorySchema } from '@/validations/schema';

interface CategoryNameAddScreen {
  iconClose: () => void;
}

const CategoryNameAddScreen = ({ iconClose }: CategoryNameAddScreen) => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);
  const [addCategory, setAddCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [schemeError, setSchemeError] = useState<boolean>(false);
  const handleChange = (event: { target: { value: string } }) => {
    const inputText = event.target.value;
    try {
      // moneyCountSchemeの形に合うかどうか判断
      categorySchema.parse(inputText);
      // テキストフィールドを通常表示
      setSchemeError(false);
      setErrorMessage('');
      // 入力フィールドの値を入力値にする
    } catch (error) {
      if (error instanceof z.ZodError) {
        // moneyCountSchemeの形に合わない場合はこちらを実行

        error.errors.forEach((e) => {
          setErrorMessage(e.message);
        });
        // テキストフィールドをエラー表示
        setSchemeError(true);
      }
    }
    return inputText;
  };
  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'right' }}>
          <ClearIcon onClick={iconClose} sx={{ fontSize: '80px' }} />
        </Box>

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '40px' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 4.2rem)' }}>カテゴリ追加</Typography>
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
        <TextField
            id="outlined-basic"
            label="カテゴリー"
            maxRows={6}
            error={errorMessage.length > 1}
            helperText={errorMessage}
            multiline
            variant="outlined"
            onChange={(e) => {
              handleChange(e);
              setAddCategory(e.target.value);
            }}
          />
        </Box>

        <Stack direction="row" fontSize="40px" sx={{ mt: '300px', justifyContent: 'right', mr: '7rem' }}>
          <Button onClick={iconClose}>
            <CancelButton
              selectedChangeCancel={selectedChangeCancel}
              setSelectedChangeCancel={setSelectedChangeCalcel}
            />
          </Button>
          <Button>
            <ChangeYessButton selectedChangeOkey={selectedChangeOkey} addCategory={addCategory} iconClose={iconClose} />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default CategoryNameAddScreen;
