import { Box, Button, Card, Stack, Typography } from '@mui/material';
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
        <Box  sx={{ mt: '30px' }}>
          <Typography sx={{ fontSize: 'clamp(1.25rem, 0.682rem + 2.42vw, 2.5rem)'}}>本当に消去しますか？</Typography>
        </Box>

        <Box  sx={{ mt: '5rem' }}>
        <Typography sx={{ fontSize: 'clamp(1.4rem, 0.8rem + 3.6vw, 4.0rem)'}}>メニュー:唐揚げ</Typography>
        </Box>

        <Box  sx={{ mt: '5rem' }}>
        <Typography sx={{ fontSize: 'clamp(1.0rem, 0.4rem + 2.0vw, 2.0rem)'}}>全ての設定から消されます</Typography>
        </Box>

        <Stack direction={'row'}  sx={{ mt: '10%', justifyContent: 'right', mr: '7rem', mb: '20px' }}>
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
