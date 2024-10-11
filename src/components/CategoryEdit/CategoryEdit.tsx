import CategoryDeleteButton from '@/components/CategoryEdit/CategoryDeleteButton';
import CategoryNameChangeButton from '@/components/CategoryEdit/CategoryNameChangeButton';
import CategoryDeletePopupCard from '@/components/managementPopup/CategoryDeletePopupCard';
import CategoryNameAddCard from '@/components/managementPopup/CategoryNameAddCard';
import CategoryNameAddScreen from '@/components/managementPopup/CategoryNameAddScreen';
import { getCategory } from '@/firebase/useCategory';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { sortingOrders } from '@/utils/sortingOrders';
import { categorySchema } from '@/validations/schema';
import { Box, Button, Dialog, DialogContent, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryEdit() {
  //const menuArr = ['フード', 'ドリンク'];

  // const categoryDelete = "消去";
  // const categoryChange = "名称変更";

  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {};
  const iconClose = () => {
    setOpen(false);
  };

  const orderData = getCategory();
  return (
    <div>
      <Box sx={{ mr: '50px', textAlign: 'right', mt: '40px', mb: '90px' }}>
        <Button
          sx={{ fontSize: '30px', width: '20rem', py: '40px', bgcolor: 'orange', color: 'black' }}
          variant="outlined"
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

      {categoryData.category.map((categorydata) => (

          <Stack alignItems="center" border="solid" direction="row" height="20vh">
            <Box sx={{ fontSize: '50px', ml: '70px' }}>{categorydata.name}</Box>

            <Stack direction="row" sx={{ ml: 'auto' }}>
              <Box sx={{ mr: '10px' }}>
                <CategoryDeleteButton categoryName={categorydata.name} categoryId={categorydata.id}  />
              </Box>
              <Box sx={{ ml: 'auto', mr: '10px' }}>
                <CategoryNameChangeButton orderName={orderName.name} setCategoryName={setCategoryName} categoryName={categoryName}/>
              </Box>
            </Stack>
          </Stack>

      ))}
    </div>
  );
}
