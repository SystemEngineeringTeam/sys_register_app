import { Box, Stack } from '@mui/material';
import React from 'react';

interface OrderMenueCustomizeProps {
  custom: string;
  customprice:number;
}

const OrderMenueCustomize = ({ custom, customprice}: OrderMenueCustomizeProps) => {
  return (
    <div>
      <Stack direction="row" sx={{ borderBottom: '1px solid #2b2b2b'}}>
        
          <Box sx={{ml:'10px'}}>{custom}</Box>
          <Box sx={{ml:'auto'}}>+{customprice}</Box>
        
      </Stack>
    </div>
  );
};

export default OrderMenueCustomize;
