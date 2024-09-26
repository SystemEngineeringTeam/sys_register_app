import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import ClearIcon from '@mui/icons-material/Clear';
import { processOrderChange } from '@/utils/processOrderChange';
import { useOrderCollection } from '@/firebase/useOrderCollection';

const ManagementPopup = () => {

  const { data } = useOrderCollection();

  const menu = processOrderChange((data || []).flatMap((order) => order.order.flatMap((o) => o.item)));
  console.log("🚀 ~ menu:", menu)

  const menuName = menu.map((value, index) => {
      
  })
  
  
  return (
    <div>
      <Box sx={{ textAlign: 'right' }}>
        <ClearIcon />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '40px' }}>
          本当に消去しますか？
        </Box>

        <Stack
          fontSize={{ xs: '20px', sm: '40px', md: '60px' }}
          direction={'row'}
          sx={{ justifyContent: 'center', mt: '10rem' }}
        >
          <Stack>メニュー:</Stack>
          <Stack sx={{ ml: '30px' }}>つくね</Stack>
        </Stack>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
          全ての設定から消されます
        </Box>

        <Stack direction={'row'} fontSize={'40px'} sx={{ mt: '10rem', justifyContent: 'right', mr: '7rem' }}>
          <Button>
            <CancelButton />
          </Button>
          <Button>
            <DeleteYesButton />
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default ManagementPopup;
