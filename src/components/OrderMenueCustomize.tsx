import { Box, Stack } from '@mui/material';
import React from 'react';

interface OrderMenueContenaProps {
  custom: string;
}

const OrderMenueCustomize = ({ custom }: OrderMenueContenaProps) => {
  return (
    <div>
      <Stack direction="row">
        <Box sx={{ borderBottom: '2px solid #2b2b2b', flex: 3 }}>
          <Box>{custom}</Box>
          <Box>+20</Box>
        </Box>
      </Stack>
    </div>
  );
};

export default OrderMenueCustomize;
