import { deleteCategory, getCategory, setCategoty } from '@/firebase/useCategory';
import { userAtom } from '@/login/AdminLogin';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import React, { useEffect } from 'react';

interface ChangeYessButton {
  selectedChangeOkey: boolean;
  addCategory: string;
  iconClose: () => void;
}

const ChangeYessButton = ({ selectedChangeOkey, addCategory, iconClose }: ChangeYessButton) => {
  

  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  const categoryData = getCategory();

//ボタン押した時の処理
  const AddButton = () => {
    const updateddata = {
      name: addCategory,
    };

    //もし被っていたら配列に入れる
    const filterupdateddata = categoryData.category.filter((categorydata) => {
      console.log('categorydata.name', categorydata.name);
      return categorydata.name === updateddata.name;
    });

    //被っている数が0だったら配列に入れる
    if (filterupdateddata.length === 0) {
        setCategoty(updateddata, user);
    }
    if (filterupdateddata.length > 0) {
      alert('error');
    }

    //ポップアップ閉じる処理
    iconClose();
  };



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
