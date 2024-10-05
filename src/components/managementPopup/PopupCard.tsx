import { Card } from '@mui/material';
import PopupScreen from './PopupScreen';

interface PopupCardProps {
  iconClose: () => void;
}

function PopupCard({ iconClose }: PopupCardProps) {
  return (
    <div>
      <PopupScreen iconClose={iconClose} />
    </div>
  );
}

export default PopupCard;
