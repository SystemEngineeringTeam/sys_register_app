
import CategoryDeleteButton from '@/components/CategoryEdit/CategoryDeleteButton';
import CategoryNameChangeButton from '@/components/CategoryEdit/CategoryNameChangeButton';
import { Box, Card, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

export default function CategoryEdit() {
  const menuArr = ['フード', 'ドリンク'];

  return (
    <div>
        
      <Box sx={{ mr: '50px', textAlign: 'right', mt: '40px', mb: '90px' }}>
        <TextField id="outlined-basic" label="カテゴリー追加" variant="outlined" multiline maxRows={6} />
      </Box>

      {menuArr.map((orderName) => (
        <div>
          <Stack direction={'row'} border={'solid'} height={'20vh'} alignItems={'center'}>
            <Box sx={{ fontSize: '50px', ml:'70px'}}>{orderName}</Box>

            <Stack direction={'row'} sx={{ml: 'auto' }}>
              <Box sx={{mr:'10px'}}>
                <CategoryDeleteButton />
              </Box>
              <Box sx={{ml: 'auto' , mr:'10px'}}>
                <CategoryNameChangeButton />
              </Box>
            </Stack>
          </Stack>
        </div>
      ))}
    </div>
  );
}