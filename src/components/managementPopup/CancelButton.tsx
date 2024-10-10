import { Button } from '@mui/material';
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
        disableElevation
        onClick={ClickChangeButton}
        size="large"
        sx={{ backgroundColor: selectedChangeCancel ? 'orange' : 'gray', borderRadius: '20px', fontSize: '30px' }}
        variant="contained"
      >
        Cancel
      </Button>
    </div>
  );
};

export default CancelButton;
