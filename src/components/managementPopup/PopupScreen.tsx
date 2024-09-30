import { Box, Button, Card, Stack } from '@mui/material';
import React from 'react';
import CancelButton from '../CancelButton';
import DeleteYesButton from '../DeleteYesButton';
import ClearIcon from '@mui/icons-material/Clear';
import { processOrderChange } from '@/utils/processOrderChange';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { processOrderCollection } from '@/utils/processOrderCollection';



const PopupScreen = () => {

  // const menuName = orders.map((value, index) => {
  //   const selectMenu = menu[index];
  //   console.log("selectMenu.name:",selectMenu.name);
  // })

  return (
    <div>
      <Card>
          <Stack sx={{ textAlign: 'right' }}>
            <ClearIcon sx={{ fontSize: '80px' }} />
          </Stack>
          <Stack sx={{ textAlign: 'center' }}>
            {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
            <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '40px' }}>
              本当に消去しますか？
            </Box>

            <Stack
              fontSize={{ xs: '20px', sm: '40px', md: '60px' }}
              direction={'row'}
              sx={{ justifyContent: 'center', mt: '10rem' }}
            >
              メニュー:唐揚げ
            </Stack>

            <Stack fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
              全ての設定から消されます
            </Stack>

            <Stack direction={'row'} fontSize={'40px'} sx={{mt:'5%', mb: '15%', justifyContent: 'right', mr: '7rem' }}>
              <Button>
                <CancelButton />
              </Button>
              <Button>
                <DeleteYesButton />
              </Button>
            </Stack>
          </Stack>
      </Card>
    </div>
  );
};

export default PopupScreen;
