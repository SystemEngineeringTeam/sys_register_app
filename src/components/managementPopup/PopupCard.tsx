import PopupScreen from './PopupScreen';

interface PopupCardProps {
  iconClose: () => void;
}

const PopupCard = ({ iconClose }: PopupCardProps) => {
  return (
    <div>
      <PopupScreen iconClose={iconClose} />
    </div>
  );
};

export default PopupCard;
