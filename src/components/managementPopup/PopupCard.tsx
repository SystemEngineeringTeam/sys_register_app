import { Box, Card } from '@mui/material';
import React, { useState } from 'react';
import PopupScreen from './PopupScreen';

function PopupCard() {

  return (
    <div>
      <Card sx={{ width:'70%' , ml:'15%' , mt:'5%' , height:'60%'}}>
          <PopupScreen />
      </Card>
    </div>
  );
}

export default PopupCard;
