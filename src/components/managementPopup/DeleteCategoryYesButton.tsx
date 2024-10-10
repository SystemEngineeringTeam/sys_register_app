import { deleteCategory } from '@/firebase/useCategory';
import { category } from '@/types';
import { Button } from '@mui/material';
import React, { useEffect } from 'react';

interface DeleteCategoryYesButtonProp {
  selectedChangeOkey: boolean;
  setSelectedChangeOkey: React.Dispatch<React.SetStateAction<boolean>>;
  orderId: string;
  order: string;
}

function DeleteCategoryYesButton({
  selectedChangeOkey,
  setSelectedChangeOkey,
  orderId,
  order,
}: DeleteCategoryYesButtonProp) {


    //ボタンを押した時に発火するように同期処理
//   const Delete = 
//     deleteCategory(orderId)
  

  const ClickYesButton = () => {
    setSelectedChangeOkey(!selectedChangeOkey);
  };

  console.log("4 order", order);
  
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
        はいee
      </Button>
    </div>
  );
}

export default DeleteCategoryYesButton;
