import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import ChangeButton from './ChangeButton';


interface CustmizeGrafProps{
    customize:string;
}

function CustmizeGraf({customize}:CustmizeGrafProps) {


    const [selectedChange,setSelectedChange] = useState(true);
   

  return (
    <div>
      <Box>
        <Stack
          direction="row"
          sx={{ fontSize: '30px', mt: '40px', ml: '40px', borderBottom: '1px solid #2b2b2b', width: '70%' }}
        >
          <Box>{customize}</Box>
          <Box sx={{ ml: '200px' }}>
            <ChangeButton 
            selectedChange={selectedChange}
            setSelectedChange={setSelectedChange} />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default CustmizeGraf;
