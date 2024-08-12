import { Box, Divider, Grid, Stack } from '@mui/material';
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

// interface OrderMenueNameProps{
//     menuname:string;
// }

interface OrderMenueNameProps{
    ordername:string;
}

const OrderMenueName = ({ordername}:OrderMenueNameProps) => {
  return (
    <div style={{display:"flex"}}>
      
        {/* {menuname} */}
        <Box sx={{ml:'0px',fontSize:'30px'}} >{ordername}</Box>
        <Box sx={{ml:'20px',fontSize:'30px'}}><CreateIcon /></Box>
        <Box sx={{fontSize:'25px',ml:'20px'}}>x2</Box>
        <Box sx={{fontSize:'30px',ml: 'auto'}}>300</Box>
      
    </div>
  )
}

export default OrderMenueName
