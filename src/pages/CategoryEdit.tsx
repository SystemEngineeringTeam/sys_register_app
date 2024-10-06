import CategoryDeleteButton from '@/components/CategoryEdit/CategoryDeleteButton';
import CategoryNameChangeButton from '@/components/CategoryEdit/CategoryNameChangeButton';
import { Box, Stack, TextField } from '@mui/material';
import React from 'react';

export default function CategoryEdit() {
  const menuArr = ['フード', 'ドリンク'];

  return (
    <div>
      <Box sx={{ mr: '50px', textAlign: 'right', mt: '40px', mb: '90px' }}>
        <TextField id="outlined-basic" label="カテゴリー追加" maxRows={6} multiline variant="outlined" />
      </Box>

      {menuArr.map((orderName) => (
        <div>
          <Stack alignItems="center" border="solid" direction="row" height="20vh">
            <Box sx={{ fontSize: '50px', ml: '70px' }}>{orderName}</Box>

            <Stack direction="row" sx={{ ml: 'auto' }}>
              <Box sx={{ mr: '10px' }}>
                <CategoryDeleteButton />
              </Box>
              <Box sx={{ ml: 'auto', mr: '10px' }}>
                <CategoryNameChangeButton />
              </Box>
            </Stack>
          </Stack>
        </div>
      ))}
    </div>
  );
}
