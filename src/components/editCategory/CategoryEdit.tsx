import CategoryDeleteButton from '@/components/CategoryEdit/CategoryDeleteButton';
import CategoryNameChangeButton from '@/components/CategoryEdit/CategoryNameChangeButton';
import CategoryNameAddCard from '@/components/managementPopup/CategoryNameAddCard';
import { getCategory } from '@/firebase/useCategory';
import { Box, Button, Dialog, DialogContent, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function CategoryEdit() {
  const [open, setOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {};
  const iconClose = () => {
    setOpen(false);
  };
  const categoryData = getCategory();
  return (
    <div>
      <Box sx={{ mr: '50px', textAlign: 'right', mt: '40px', mb: '90px' }}>
        <Button
          sx={{ fontSize: '30px', width: '20rem', py: '40px', bgcolor: 'orange', color: 'white' }}
          onClick={handleOpen}
        >
          カテゴリ追加
        </Button>

        <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
          <DialogContent sx={{ p: 0 }}>
            <CategoryNameAddCard iconClose={iconClose} />
          </DialogContent>
        </Dialog>
      </Box>

      {categoryData.category.map((category) => (
        <Stack alignItems="center" border="solid" direction="row" height="20vh">
          <Box sx={{ fontSize: '50px', ml: '70px' }}>{category.name}</Box>

          <Stack direction="row" sx={{ ml: 'auto' }}>
            <Box sx={{ mr: '10px' }}>
              <CategoryDeleteButton categoryName={category.name} categoryId={category.id} />
            </Box>
            <Box sx={{ ml: 'auto', mr: '10px' }}>
              <CategoryNameChangeButton
                setCategoryName={setNewCategoryName}
                categoryName={newCategoryName}
                categoryId={category.id}
                categorydata={category}
              />
            </Box>
          </Stack>
        </Stack>
      ))}
    </div>
  );
}
