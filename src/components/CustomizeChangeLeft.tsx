import React from 'react'
import CustomizeMenu from './CustomizeMenu'
import { Box } from '@mui/material'
import CustmizeGraf from './CustmizeGraf'


function CustomizeChangeLeft() {

    const customizechanges = ["カスタマイズ1","カスタマイズ2","カスタマイズ3"];
    

  return (
    <div>
        <Box sx={{ ml: '50px'}}>
            <Box><CustomizeMenu /></Box>
            <Box sx={{fontSize:'30px'}}>カスタマイズ</Box>
            {customizechanges.map((order) => (
                <CustmizeGraf customize={order} />
            ))}
            
        </Box>
        
      
    </div>
  )
}

export default CustomizeChangeLeft
