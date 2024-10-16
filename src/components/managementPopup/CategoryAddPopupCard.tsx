import CategoryAddPopupScreen from './CategoryAddPopupScreen';

interface CategoryAddPopupCardProps {
  iconClose: () => void;
}

const CategoryAddPopupCard = ({ iconClose }: CategoryAddPopupCardProps) => {
  return (
    <div>
        <CategoryAddPopupScreen iconColse={iconClose} />
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
