import { deleteCategory, updateCategory } from '@/firebase/useCategory';
import { userAtom } from '@/login/AdminLogin';
import { category } from '@/types';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import React from 'react';

interface CategorySaveButtonProps {
  selectedChangeOkey: boolean;
  setSelectedChangeOkey: React.Dispatch<React.SetStateAction<boolean>>;
  categoryName: string;
  categorydata: category;
  categoryId: string;
  iconClose: () => void
}

const CategorySaveButton = ({ selectedChangeOkey, setSelectedChangeOkey,  categorydata, categoryName, categoryId, iconClose}: CategorySaveButtonProps) => {
    const user = useAtomValue(userAtom);
    if (!user) {
      throw new Error('User is not logged in');
    }

    
    const ClickSaveButton = () => {
        const updatecategorydata  = {
            id:categoryId,
            name:categoryName,
        }
    updateCategory(updatecategorydata,user);
    iconClose();
    }
    

  return (
    <div>
      <Button
        disableElevation
        onClick={ClickSaveButton}
        
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
        保存
      </Button>
      
    </div>
  );
};

export default CategorySaveButton;
