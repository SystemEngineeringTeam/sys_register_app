import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import PopupCard from './PopupCard';

const CategoryDaialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {};
  const iconClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Product
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <PopupCard iconClose={iconClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CategoryDaialog;
