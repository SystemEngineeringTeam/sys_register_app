import Chip from '@mui/material/Chip';
import { type options } from '../../types/index';

interface ItemOptionsProps {
  options: options[] | undefined;
}

const ItemOptions = ({ options }: ItemOptionsProps) => {
  return (
    <div>
      {/* undefindが入る場合も対応 */}
      {options?.map((option) => (
        <Chip sx={{ bgcolor:'#f26c4f'}} component="button" label={option.name} />
      ))}
    </div>
  );
};

export default ItemOptions;
