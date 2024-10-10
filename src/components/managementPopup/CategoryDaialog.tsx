import { Button, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';
import PopupCard from './PopupCard';

const CategoryDaialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {};
  const iconClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="primary" onClick={handleOpen} variant="contained">
        Open Product
      </Button>

      <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
        <DialogContent>
          <PopupCard iconClose={iconClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CategoryDaialog;
