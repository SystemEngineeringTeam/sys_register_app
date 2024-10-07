import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import ChangeButton from './ChangeButton';
import { options } from '@/types';

interface CustmizeGrafProps {
  itemOption: options;
  options: options[];
  setOptions: React.Dispatch<React.SetStateAction<options[]>>;
}

const CustmizeGraf = ({ itemOption, options, setOptions }: CustmizeGrafProps) => {
  // itemOption.idがoptionsの中にあるかどうか
  const isSelected = options.some((option) => option.id === itemOption.id);

  const [selectedChange, setSelectedChange] = useState(isSelected);

  useEffect(() => {
    // selectedChangeが変更されたときにoptionsに追加または削除
    if (selectedChange) {
      setOptions([...options, itemOption]);
    } else {
      setOptions(options.filter((option) => option.id !== itemOption.id));
    }
  }, [selectedChange]);

  return (
    <div>
      <Box>
        <Stack
          direction="row"
          sx={{
            wordBreak: 'break-word',
            fontSize: { xs: '15px', sm: '20px', md: '40px' },
            mt: '40px',
            ml: '40px',
            borderBottom: '1px solid #2b2b2b',
            width: '80%',
          }}
        >
          <Box sx={{ flex: 3 }}>{itemOption.name}</Box>
          {/*optionPriceが0より多いときに値段を表示 */}
          {itemOption.price > 0 && <Box sx={{ flex: 1 }}>+{itemOption.price}</Box>}
          <Box sx={{ flex: 1 }}>
            <ChangeButton selectedChange={selectedChange} setSelectedChange={setSelectedChange} />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default CustmizeGraf;
