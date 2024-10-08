import CategoryDeleteButton from '@/components/CategoryEdit/CategoryDeleteButton';
import CategoryNameChangeButton from '@/components/CategoryEdit/CategoryNameChangeButton';
import CategoryDeletePopupCard from '@/components/managementPopup/CategoryDeletePopupCard';
import CategoryNameAddScreen from '@/components/managementPopup/CategoryNameAddScreen';
import { Box, Button, Dialog, DialogContent, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryEdit() {
  const menuArr = ['フード', 'ドリンク'];

  // const categoryDelete = "消去";
  // const categoryChange = "名称変更";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {};
  const iconClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ mr: '50px', textAlign: 'right', mt: '40px', mb: '90px' }}>
        <Button sx={{ ontSize: '20px', width: '10rem' }} variant="outlined" onClick={handleOpen}>
          カテゴリ追加
        </Button>

        <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
          <DialogContent sx={{ p: 0 }}>
            <CategoryNameAddScreen iconClose={iconClose} />
          </DialogContent>
        </Dialog>
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
