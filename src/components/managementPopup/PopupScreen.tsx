import { Box, Button, Card, Stack } from '@mui/material';
import React, { useState } from 'react';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import ClearIcon from '@mui/icons-material/Clear';
import { processOrderChange } from '@/utils/processOrderChange';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { processOrderCollection } from '@/utils/processOrderCollection';

const PopupScreen = () => {
  // const menuName = orders.map((value, index) => {
  //   const selectMenu = menu[index];
  //   console.log("selectMenu.name:",selectMenu.name);
  // })

  const [selectedChangeCancel, setSelectedChangeCancel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);

  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'right' }}>
          <ClearIcon sx={{ fontSize: '80px' }} />
        </Box>

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '30px' }}>
          本当に消去しますか？
        </Box>

        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '5rem' }}>
          メニュー:唐揚げ
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
          全ての設定から消されます
        </Box>

        <Stack direction={'row'} fontSize={'40px'} sx={{ mt: '10%', justifyContent: 'right', mr: '7rem', mb: '20px' }}>
          <Button>
            <CancelButton
              selectedChangeCancel={selectedChangeCancel}
              setSelectedChangeCancel={setSelectedChangeCancel}
            />
          </Button>
          <Button>
            <DeleteYesButton selectedChangeOkey={selectedChangeOkey} setSelectedChangeOkey={setSelectedChangeOkey} />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default PopupScreen;
