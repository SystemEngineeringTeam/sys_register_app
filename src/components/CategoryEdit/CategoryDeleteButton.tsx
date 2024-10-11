import { Button, Dialog, DialogContent, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryDeletePopupCard from '../managementPopup/CategoryDeletePopupCard';
import { category } from '@/types';

interface CategoryDeleteButton {
  categoryName: string;
  categoryId: string;
}

const CategoryDeleteButton = ({ categoryName, categoryId }: CategoryDeleteButton) => {
  const [selectedChange, setSelectedChange] = useState(true);

  const [open, setOpen] = useState(false);

  // モーダルを開く処理
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {};
  const iconClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        disableElevation
        onClick={handleOpen}
        sx={{ bgcolor: selectedChange ? 'red' : 'gray', color: 'black', fontSize: '20px', width: '10rem' }}
        variant="contained"
      >
        消去
      </Button>

      <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
        <DialogContent sx={{ p: 0 }}>
          <CategoryDeletePopupCard iconClose={iconClose} categoryName={categoryName} categoryId={categoryId}  />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryDeleteButton;
