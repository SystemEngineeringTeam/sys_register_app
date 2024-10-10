import { deleteCategory } from '@/firebase/useCategory';
import { userAtom } from '@/login/AdminLogin';
import { category } from '@/types';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import React, { useEffect } from 'react';

interface DeleteCategoryYesButtonProp {
  selectedChangeOkey: boolean;
  setSelectedChangeOkey: React.Dispatch<React.SetStateAction<boolean>>;
  categoryId: string;
  iconClose: () => void;
}

function DeleteCategoryYesButton({
  selectedChangeOkey,
  setSelectedChangeOkey,
  categoryId,
  iconClose,
}: DeleteCategoryYesButtonProp) {

  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  const ClickYesButton = () => {
    setSelectedChangeOkey(!selectedChangeOkey);

    deleteCategory(categoryId,user);
    iconClose();
  };

  return (
    <div>
      <Button
        disableElevation
        onClick={ClickYesButton}
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
}

export default DeleteCategoryYesButton;
