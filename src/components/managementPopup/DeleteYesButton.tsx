import { Box, Button } from '@mui/material';
import React from 'react';

interface DeleteYesButtonProps{
  selectedChangeOkey: boolean;
  setSelectedChangeOkey: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteYesButton({selectedChangeOkey ,setSelectedChangeOkey}:DeleteYesButtonProps) {

  const ClickYesButton = ()  =>{
      setSelectedChangeOkey(!selectedChangeOkey);
  }
  return (
    <div>
      <Button variant="contained"
        disableElevation 
        onClick={ClickYesButton} 
        size="large"
        sx={{ bgcolor: selectedChangeOkey ? 'red' : 'gray', color: 'black', py: '10px', width: '150px', borderRadius: '20px' , fontSize: '30px'}}>
        はい
      </Button>
    </div>
  );
}

export default DeleteYesButton;
