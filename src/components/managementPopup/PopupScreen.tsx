import { Box, Button, Card, Stack } from '@mui/material';
import React from 'react';
import CancelButton from '../CancelButton';
import DeleteYesButton from '../DeleteYesButton';
import ClearIcon from '@mui/icons-material/Clear';
import { processOrderChange } from '@/utils/processOrderChange';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { processOrderCollection } from '@/utils/processOrderCollection';

const PopupScreen = () => {
  const { data } = useOrderCollection();

  const process = 'accounting';
  const order = processOrderCollection(process);
  console.log('🚀 ~ Order ~ order:', order);

  const orders = order.map((order) => Number(order.id));
  console.log('🚀 ~ OrderChange ~ orders:', orders);

  const menu = processOrderChange((data || []).flatMap((order) => order.order.flatMap((o) => o.item)));
  console.log('🚀 ~ menu:', menu);

  // const menuName = orders.map((value, index) => {
  //   const selectMenu = menu[index];
  //   console.log("selectMenu.name:",selectMenu.name);
  // })

  return (
    <div>
      <Card sx={{ width:'70%', position: 'fixed' , ml:'15%' , mt:'5%'}}>
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
              <Stack>メニュー:</Stack>
              <Stack sx={{ ml: '30px' }}>
                {orders.map((value, index) => {
                  const selectMenu = menu[index];
                  return <div>{selectMenu.name}</div>;
                })}
              </Stack>
            </Stack>

            <Stack fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
              全ての設定から消されます
            </Stack>

            <Stack direction={'row'} fontSize={'40px'} sx={{mt:'5%', mb: '3%', justifyContent: 'right', mr: '7rem' }}>
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
