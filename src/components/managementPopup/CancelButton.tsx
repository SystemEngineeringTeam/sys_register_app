import { Box, Button } from '@mui/material';
import React from 'react';

interface CancelButtonProps {
  selectedChangeCancel: boolean;
  setSelectedChangeCancel: React.Dispatch<React.SetStateAction<boolean>>;
}

const CancelButton = ({ selectedChangeCancel, setSelectedChangeCancel }: CancelButtonProps) => {
  const ClickChangeButton = () => {
    setSelectedChangeCancel(!selectedChangeCancel);
  };
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        size="large"
        onClick={ClickChangeButton}
        sx={{ backgroundColor: selectedChangeCancel ? 'orange' : 'gray', borderRadius: '20px', fontSize: '30px' }}
      >
        Cancel
      </Button>
    </div>
  );
};

export default CancelButton;
