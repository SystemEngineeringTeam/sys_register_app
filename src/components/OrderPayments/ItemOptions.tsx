import Chip from '@mui/material/Chip';
import { type options } from '../../types/index';

interface ItemOptionsProps {
  options: options[];
}

const ItemOptions = ({ options }: ItemOptionsProps) => {
  return (
    <div>
      {options.map((option) => (
        <Chip color="primary" component="button" label={option.name} />
      ))}
    </div>
  );
};

export default ItemOptions;
