import { Box, Divider, Grid, Stack } from '@mui/material';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';

// interface OrderMenueNameProps{
//     menuname:string;
// }

interface OrderMenueNameProps {
  ordername: string;
  orderprice: number;
  menuqty: number;
  customizename: string;
}

const OrderMenueName = ({ ordername, orderprice, menuqty, customizename }: OrderMenueNameProps) => {
  console.log('qty:', menuqty);
  console.log('menu:', ordername);
  console.log('customizename:', customizename);
  return (
    <div style={{ display: 'flex' }}>
      {/* {menuname} */}
      <Link to="/customizechange" state={{ ordername: ordername, customizename: customizename }}>
        <Box sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
          <CreateIcon></CreateIcon>
        </Box>
      </Link>
      <Box flex={3} sx={{ ml: '30px', wordBreak: 'break-word', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
        {ordername}
      </Box>
      <Box
        flex={1.5}
        sx={{ ml: { xs: '30px', sm: '50px', md: '520px' }, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        x{menuqty}
      </Box>
      <Box sx={{ ml: 'auto', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>{orderprice}</Box>
    </div>
  );
};

export default OrderMenueName;
