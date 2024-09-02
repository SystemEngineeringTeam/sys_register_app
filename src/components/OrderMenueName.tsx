import { Box, Divider, Grid, Stack } from '@mui/material';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';

// interface OrderMenueNameProps{
//     menuname:string;
// }

interface OrderMenueNameProps {
  ordername: string;
  orderprice: number;
}

const OrderMenueName = ({ ordername, orderprice }: OrderMenueNameProps) => {
  return (
    <div style={{ display: 'flex' }}>
      {/* {menuname} */}
      <Box sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
        <CreateIcon />
      </Box>
      <Box flex={3} sx={{ ml: '30px', wordBreak: 'break-word', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
        {ordername}
      </Box>
      <Box
        flex={1.5}
        sx={{ ml: { xs: '30px', sm: '50px', md: '520px' }, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        x2
      </Box>
      <Box sx={{ ml: 'auto', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>{orderprice}</Box>
    </div>
  );
};

export default OrderMenueName;
