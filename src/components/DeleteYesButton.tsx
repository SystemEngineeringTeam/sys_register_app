import { Box, Button } from '@mui/material';
import React from 'react';

function DeleteYesButton() {
  return (
    <div>
      <Button sx={{ bgcolor: 'red', color: 'black', py: '10px', width: '150px', borderRadius: '20px' }}>
        <Box fontSize={'20px'}>はい</Box>
      </Button>
    </div>
  );
}

export default DeleteYesButton;
