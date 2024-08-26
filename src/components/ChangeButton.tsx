import { Button } from '@mui/material'
import React, { useEffect } from 'react'

interface  ChangeButtonProps {
    selectedChange: boolean;
    setSelectedChange:React.Dispatch<React.SetStateAction<boolean>>;
}

function ChangeButton({selectedChange,setSelectedChange}:ChangeButtonProps) {

    const handleChange = () => {
        setSelectedChange(!selectedChange);
    }



  return (
    <div>
      <Button variant='contained' disableElevation size='large' onClick={handleChange} 
      sx={{backgroundColor: selectedChange ? '#adadad' : 'orange'}}
      >
        {selectedChange ? "なし" : "あり"}
      </Button>
    </div>
  )
}

export default ChangeButton
