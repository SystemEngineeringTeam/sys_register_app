import { deleteCategory, getCategory, updateCategory } from '@/firebase/useCategory';
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

    const categoryData = getCategory();
    
    const ClickSaveButton = () => {
        const updatecategorydata  = {
            id:categoryId,
            name:categoryName,
        }

        //もし被っていたら配列に入れる
    const filterupdateddata = categoryData.category.filter((categorydata) => {
        console.log('categorydata.name', categorydata.name);
        return categorydata.name === updatecategorydata.name;
      });
      //被っている数が0だったら配列に入れる
    if (filterupdateddata.length === 0) {
        updateCategory(updatecategorydata,user);
    }
    if (filterupdateddata.length > 0) {
      alert("同じ名前は登録できません。");
    }


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
