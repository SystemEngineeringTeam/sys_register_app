import { Box } from '@mui/material';
import React from 'react';
import CustomizeChangeLeft from '../components/CustomizeChangeLeft';
import CustomizeChangeRight from '../components/CustomizeChangeRight';

function CustomizeChange() {
  return (
    <div>
      <Box sx={{display:'flex'}}>
        <Box sx={{flex:6}}>
          <CustomizeChangeLeft />
        </Box>
        <Box sx={{flex:4}}>
          <CustomizeChangeRight />
        </Box>
      </Box>
    </div>
  );
}

export default CustomizeChange;
