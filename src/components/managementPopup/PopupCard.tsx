import { Box, Card } from '@mui/material';
import React from 'react';
import PopupScreen from './PopupScreen';

function PopupCard() {
  return (
    <div>
      <Box >
        <Card >
          <PopupScreen />
        </Card>
      </Box>
    </div>
  );
}

export default PopupCard;
