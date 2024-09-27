import { Box, Divider, Grid, Stack } from '@mui/material';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';

// interface OrderMenueNameProps{
//     menuname:string;
// }

interface OrderMenueNameProps {
  selectMenuName: string;
  selectMenuPrice: number;
  selectMenuqty: number;
  selectCustomizeName: string;
}

const OrderMenueName = ({ selectMenuName, selectMenuPrice, selectMenuqty, selectCustomizeName }: OrderMenueNameProps) => {
  console.log('qty:', selectMenuqty);
  console.log('menu:', selectMenuName);
  console.log('customizename:', selectCustomizeName);
  return (
    <div style={{ display: 'flex' }}>
      {/* {menuname} */}
      <Link to="/customizechange" state={{ ordername: selectMenuName, customizename: selectCustomizeName }}>
        <Box sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
          <CreateIcon></CreateIcon>
        </Box>
      </Link>
      <Box flex={3} sx={{ ml: '30px', wordBreak: 'break-word', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
        {selectMenuName}
      </Box>
      <Box
        flex={1.5}
        sx={{ ml: { xs: '30px', sm: '50px', md: '520px' }, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        x{selectMenuqty}
      </Box>
      <Box sx={{ ml: 'auto', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>{selectMenuPrice}</Box>
    </div>
  );
};

export default OrderMenueName;
