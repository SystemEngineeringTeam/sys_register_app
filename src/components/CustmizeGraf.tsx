import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import ChangeButton from './ChangeButton';
import { type options } from '@/types';

interface CustmizeGrafProps {
  itemOption: options;
  choiceOptions: options[];
  setChoiceOptions: React.Dispatch<React.SetStateAction<options[]>>;
  selectOptions: options[];
}

const CustmizeGraf = ({ itemOption, choiceOptions, setChoiceOptions, selectOptions }: CustmizeGrafProps) => {
  // itemOption.idがoptionsの中にあるかどうか
  // 同じidがある場合はtrue

  console.log('selectOptionsID:' + selectOptions.map((option) => option.id));

  const Selected = selectOptions.find((option) => option.id === itemOption.id);

  console.log('itemOption.id:' + itemOption.id);
  console.log('itemOption.name:' + itemOption.name);
  console.log('Selected.id:' + Selected?.id);
  console.log('Selected.name:' + Selected?.name);

  const isSelected = () => {
    if (Selected?.id === undefined) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  };

  // 選択しているかどうかのstate
  const [selectedChange, setSelectedChange] = useState(isSelected);

  console.log('selectedChange:' + selectedChange);
  console.log('choiceOptions&&&&&&&&&&&:' + choiceOptions);

  useEffect(() => {
    // selectedChangeが変更されたときにchoiceOptionsを更新
    // ありの場合
    if (!selectedChange) {
      // choiceOptionsを変更
      setChoiceOptions(choiceOptions.filter((option) => option.id !== itemOption.id));

      console.log('choiceOptions!!!!!!!!!!!!:' + choiceOptions);

      setChoiceOptions([...choiceOptions, itemOption]);
    } else {
      // なしの場合
      // optionsからitemOptionを削除
      const newOptions = choiceOptions.filter((option) => option.id !== itemOption.id);
      setChoiceOptions(newOptions);

      console.log('choiceOptions2222222222:' + choiceOptions);
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
          {/* optionPriceが0より多いときに値段を表示 */}
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
