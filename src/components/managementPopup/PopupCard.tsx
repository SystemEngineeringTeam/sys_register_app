import { Box, Card } from '@mui/material';
import React from 'react';
import PopupScreen from './PopupScreen';

function PopupCard() {
  return (
    <div>
      <Card sx={{ width:'70%', position: 'fixed' , ml:'15%' , mt:'5%' , height:'750px'}}>
          <PopupScreen />
      </Card>
    </div>
  );
}

export default PopupCard;
