import { Button } from '@mui/material';
import React, { useState } from 'react';

const CategoryDeleteButton = () => {
  const [selectedChange, setSelectedChange] = useState(true);

  const ClickDeleteButton = () => {
    setSelectedChange(!selectedChange);
  };

  return (
    <div>
      <Button
        disableElevation
        onClick={ClickDeleteButton}
        sx={{ bgcolor: selectedChange ? 'red' : 'gray', color: 'black', fontSize: '20px', width: '10rem' }}
        variant="contained"
      >
        消去
      </Button>
    </div>
  );
};

export default CategoryDeleteButton;
