import { Button } from '@mui/material';
import React from 'react';

interface DeleteYesButtonProps {
  selectedChangeOkey: boolean;
  setSelectedChangeOkey: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  schemeError: boolean;
}

const DeleteYesButton = ({
  selectedChangeOkey,
  setSelectedChangeOkey,
  setCategoryName,
  value,
  schemeError
}: DeleteYesButtonProps) => {
  const ClickYesButton = () => {
    setSelectedChangeOkey(!selectedChangeOkey);
  };
  return (
    <div>
      <Button
        disableElevation
        disabled={schemeError}
        onClick={() => {
          setCategoryName(value);
          ClickYesButton;
        }}
        size="large"
        sx={{
          bgcolor: selectedChangeOkey ? 'red' : 'gray',
          color: 'black',
          py: '10px',
          width: '150px',
          borderRadius: '20px',
          fontSize: '30px',
        }}
        variant="contained"
      >
        はい
      </Button>
    </div>
  );
};

export default DeleteYesButton;
