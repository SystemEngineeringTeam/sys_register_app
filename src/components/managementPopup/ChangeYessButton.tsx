import { deleteCategory, setCategoty } from '@/firebase/useCategory';
import { userAtom } from '@/login/AdminLogin';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import React from 'react';

interface ChangeYessButton {
  selectedChangeOkey: boolean;
  addCategory: string;
  iconClose: () => void;
}

const ChangeYessButton = ({ selectedChangeOkey, addCategory, iconClose}: ChangeYessButton) => {

  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  const AddButton = () => {
    const updateadddata = {
        name:addCategory,
    }
    setCategoty(updateadddata,user);
    iconClose();
  }

  return (
    <div>
      <Button
        disableElevation
        onClick={AddButton}
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

export default ChangeYessButton;
