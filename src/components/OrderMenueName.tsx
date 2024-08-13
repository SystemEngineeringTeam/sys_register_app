import { Box, Divider, Grid, Stack } from '@mui/material';
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

// interface OrderMenueNameProps{
//     menuname:string;
// }

interface OrderMenueNameProps{
    ordername:string;
    orderprice:number;
}

const OrderMenueName = ({ordername,orderprice}:OrderMenueNameProps) => {
  return (
    <div style={{display:"flex"}}>
      
        {/* {menuname} */}
        <Box sx={{fontSize:{xs:"1.2rem",sm:"1.5rem",md:"2rem",fontSize:'30px'}}}><CreateIcon /></Box>
        <Box flex={.7} sx={{ml:'0px',wordBreak:"break-word", fontSize:{xs:"1.2rem",sm:"1.5rem",md:"2rem"}}} >{ordername}</Box>
        <Box sx={{paddingX:'30px', fontSize:{xs:"1.2rem",sm:"1.5rem",md:"2rem"}}}>x2</Box>
        <Box sx={{ml: 'auto',fontSize:{xs:"1.2rem",sm:"1.5rem",md:"2rem"}}}>{orderprice}</Box>
      
    </div>
  )
}

export default OrderMenueName
