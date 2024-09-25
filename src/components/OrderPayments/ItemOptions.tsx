import Chip from '@mui/material/Chip';
import { options } from '../../types/index';

interface ItemOptionsProps {
  options: options[];
}

const ItemOptions = ({options}:ItemOptionsProps) => {



  return (
    <div>
      {options.map((option) => (
        <Chip label={option.name} component="button" color="primary" />
      ))}
    </div>
  );
};

export default ItemOptions;
