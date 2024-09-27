import React from 'react';
import { Box, Button } from '@mui/material';

const DisplayNumber = ({ ordersId }: { ordersId: number }) => {
  return (
    <div>
      <Box>
        <Button
          sx={{
            flexGrow: 1,
            border: '2px solid #2b2b2b',
            textAlign: 'center',
            padding: '3px',
            borderRadius: '1vh',
            width: '165px',
            fontSize: '60px',
            margin: '10px',
            color: 'black',
          }}
        >
          {ordersId}
        </Button>
      </Box>
    </div>
  );
};

export default DisplayNumber;
