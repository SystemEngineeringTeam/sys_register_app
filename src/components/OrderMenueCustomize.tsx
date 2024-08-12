import { Box, Stack } from '@mui/material';
import React from 'react';

interface OrderMenueContenaProps {
  custom: string;
}

const OrderMenueCustomize = ({ custom }: OrderMenueContenaProps) => {
  return (
    <div>
      <Stack direction="row" sx={{ borderBottom: '2px solid #2b2b2b', flex: 3 }}>
        
          <Box sx={{flex:1}}>{custom}</Box>
          <Box sx={{flex:1,textAlign:'right'}}>+20</Box>
        
      </Stack>
    </div>
  );
};

export default OrderMenueCustomize;
