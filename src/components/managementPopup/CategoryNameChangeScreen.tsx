import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import TextField from '@mui/material/TextField';
import CategorySaveButton from './CategorySaveButton';
import { category } from '@/types';
import { categorySchema } from '@/validations/schema';
import { z } from 'zod';

interface CategoryNameChangeScreen {
  iconClose: () => void;
  categoryName: string;
  categoryId: string;
  categorydata: category;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
}
const CategoryNameChangeScreen = ({
  iconClose,
  categoryName,
  categoryId,
  categorydata,
  setCategoryName,
}: CategoryNameChangeScreen) => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);
  const [categoryNameSave, setCategoryNameSave] = useState(categorydata.name);
  const [categoryIdSave, setCategoryIdSave] = useState(categorydata.id);
  const [value, setValue] = useState(categoryName);
  const [errorMessage, setErrorMessage] = useState('');
  const [schemeError, setSchemeError] = useState<boolean>(false);
  const handleChange = (event: { target: { value: string } }) => {
    const inputText = event.target.value;
    try {
      setValue(inputText);
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
        <Box sx={{ mt: '20px' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 4.2rem)' }}>現在の名前</Typography>
        </Box>

        <Box sx={{ mt: '10px' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 3.2rem)' }}>{categorydata.name}</Typography>
        </Box>

        <Box sx={{ mt: '10rem' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.4rem + 2.0vw, 2.0rem)' }}>変更後の名前</Typography>
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '1rem' }}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            maxRows={6}
            error={errorMessage.length > 1}
            helperText={errorMessage}
            multiline
            variant="outlined"
            value={categoryNameSave}
            onChange={(e) => {
              handleChange(e);
              setCategoryNameSave(e.target.value);
            }}
          />
        </Box>

        <Stack direction="row" fontSize="40px" sx={{ mt: '5%', justifyContent: 'right', mr: '7rem' }}>
          <Button
            // disabled={}
            onClick={() => {
              iconClose();
            }}
          >
            <CancelButton
              selectedChangeCancel={selectedChangeCancel}
              setSelectedChangeCancel={setSelectedChangeCalcel}
            />
          </Button>
          <Button>
            <CategorySaveButton
              selectedChangeOkey={selectedChangeOkey}
              setSelectedChangeOkey={setSelectedChangeOkey}
              categorydata={categorydata}
              categoryName={categoryNameSave}
              categoryId={categoryId}
              iconClose={iconClose}
              setCategoryName={setCategoryName}
              value={value}
              schemeError={schemeError}
            />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default CategoryNameChangeScreen;
