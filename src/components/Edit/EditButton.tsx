import { Button, Dialog, DialogContent } from '@mui/material';
import CategoryAddPopupCard from '../managementPopup/CategoryAddPopupCard';
import PopupCard from '../managementPopup/PopupCard';

interface EditButtonProps {
  iconClose: () => void;
  handleClose: () => void;
  open: boolean;
  handleOpen: () => void;
  selectEdit?: string;
  selectAdd?: string;
}


function EditButton({ iconClose, open, handleClose, handleOpen, selectEdit, selectAdd }: EditButtonProps) {
  return (
    <div>
      <Button onClick={handleOpen} disableElevation size="large" sx={{ backgroundColor: 'orange' }} variant="contained">
        取り消し
      </Button>

      <Dialog fullWidth maxWidth="md" onClose={handleClose} open={open}>
        <DialogContent>
          {selectAdd === 'add' ? (
            <CategoryAddPopupCard iconClose={iconClose} />
          ) : (
            <PopupCard iconClose={iconClose} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditButton;
