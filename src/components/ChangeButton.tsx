import { Button } from '@mui/material';
import React from 'react';

interface ChangeButtonProps {
  selectedChange: boolean;
  setSelectedChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeButton = ({ selectedChange, setSelectedChange }: ChangeButtonProps) => {
  const handleChange = () => {
    setSelectedChange(!selectedChange);
  };

  return (
    <div>
      <Button
        disableElevation
        onClick={handleChange}
        size="large"
        sx={{ backgroundColor: selectedChange ? '#adadad' : 'orange' }}
        variant="contained"
      >
        {selectedChange ? 'なし' : 'あり'}
      </Button>
    </div>
  );
};

export default ChangeButton;
