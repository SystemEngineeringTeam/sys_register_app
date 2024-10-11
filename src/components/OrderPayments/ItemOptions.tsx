import Chip from '@mui/material/Chip';
import { type options } from '../../types/index';
import { theme } from '@/themes/theme';
import ItemColor from './ItemColor';

interface ItemOptionsProps {
  options: options[] ;
}

const ItemOptions = ({ options }: ItemOptionsProps) => {
  return (
    <div>
        <ItemColor options={options}/>
    </div>
  );
};

export default ItemOptions;
