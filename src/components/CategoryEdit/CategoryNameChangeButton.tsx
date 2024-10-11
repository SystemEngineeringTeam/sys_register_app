import { Button, Dialog, DialogContent, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import CategoryDeletePopupCard from '../managementPopup/CategoryDeletePopupCard';
import CategoryNameChangeCard from '../managementPopup/CategoryNameChangeCard';

interface CategoryNameChangeButtonProp {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  orderName: string;
}
const CategoryNameChangeButton = ({ categoryName, setCategoryName, orderName }: CategoryNameChangeButtonProp) => {
  const ClickButton = () => {
    setSelectedChange(!selectedChange);
  };

  const [selectedChange, setSelectedChange] = useState(true);

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
      <Button
        disableElevation
        onClick={handleOpen}
        sx={{ bgcolor: selectedChange ? 'orange' : 'gray', color: 'black', fontSize: '20px', width: '10rem' }}
        variant="contained"
      >
        名称変更
      </Button>

      <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
        <DialogContent sx={{ p: 0 }}>
          <CategoryNameChangeCard
            iconClose={iconClose}
            orderName={orderName}
            setCategoryName={setCategoryName}
            categoryName={categoryName}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryNameChangeButton;
