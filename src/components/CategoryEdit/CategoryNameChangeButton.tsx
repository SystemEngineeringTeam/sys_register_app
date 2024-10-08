import { Button, Dialog, DialogContent, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import CategoryDeletePopupCard from '../managementPopup/CategoryDeletePopupCard';
import CategoryNameChangeCard from '../managementPopup/CategoryNameChangeCard';

// interface CategoryNameChangeButtonProp{
//   iconClose: () => void;
//   handleClose: () => void;
//   open: boolean;
//   handleOpen: () => void
// }
const CategoryNameChangeButton = () => {
  const ClickButton = () => {
    setSelectedChange(!selectedChange);
  };

  const [selectedChange, setSelectedChange] = useState(true);

  // 表示の状態
  const [display, setDisplay] = useState('');

  // カテゴリーの状態
  const [category, setCategory] = useState('');
  // カテゴリーの選択
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  // 表示の選択
  const handleDisplayChange = (event: SelectChangeEvent) => {
    setDisplay(event.target.value);
  };

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
          <CategoryNameChangeCard iconClose={iconClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryNameChangeButton;
