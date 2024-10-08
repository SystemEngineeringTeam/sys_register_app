import React from 'react';
import CategoryAddPopupScreen from './CategoryAddPopupScreen';
import { Card } from '@mui/material';

interface CategoryAddPopupCardProps {
  iconClose: () => void;
}

const CategoryAddPopupCard = ({ iconClose }: CategoryAddPopupCardProps) => {
  return (
    <div>
      <div>
        <CategoryAddPopupScreen iconColse={iconClose} />
      </div>
    </div>
  );
};

export default CategoryAddPopupCard;

// import PopupScreen from './PopupScreen';

// interface PopupCardProps {
//   iconClose: () => void;
// }

// const PopupCard = ({ iconClose }: PopupCardProps) => {
//   return (
//     <div>
//       いいいいい
//       <PopupScreen iconClose={iconClose} />
//     </div>
//   );
// };

// export default PopupCard;
