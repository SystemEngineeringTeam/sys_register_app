import { Button, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';
import CategoryDeletePopupCard from '../managementPopup/CategoryDeletePopupCard';

interface CategoryDeleteButton {
  orderName: string;

}

const CategoryDeleteButton = ({ orderName }: CategoryDeleteButton) => {
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
        sx={{ bgcolor: selectedChange ? 'red' : 'gray', color: 'black', fontSize: '20px', width: '10rem' }}
        variant="contained"
      >
        消去
      </Button>

      <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
        <DialogContent sx={{ p: 0 }}>
          <CategoryDeletePopupCard iconClose={iconClose}  orderName={orderName}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryDeleteButton;
