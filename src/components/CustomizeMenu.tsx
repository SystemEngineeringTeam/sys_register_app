import { Box, Stack } from '@mui/material'
import React from 'react'
import Yakitori from '/yakitori.png';

function CustomizeMenu() {
    const imageDisplaySize = { width: 200, height: 200 };
  return (
    <div>
      <Stack direction="row" alignItems="center">   
      {/* alignItems="center"で真ん中に合わせて並べる */}
        <Box><img src={Yakitori} className="yakitori" style={imageDisplaySize} /></Box>
        <Box sx={{fontSize:'60px'}}>menu</Box>
      </Stack>
    </div>
  )
}

export default CustomizeMenu
