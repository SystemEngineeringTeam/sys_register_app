import { Button } from '@mui/material'
import React, { useState } from 'react'

function CategoryNameChangeButton() {
    const [selectedChange,setSelectedChange] = useState(true);
    const ClickButton = () => {
        setSelectedChange(!selectedChange);
    }
  return (
    <div>
        <Button variant="contained"
        disableElevation 
        onClick={ClickButton} 
        sx={{bgcolor:selectedChange ? 'orange' : 'gray', color:'black', fontSize:'20px',width:'10rem' ,}}>名称変更</Button>
    </div>
  )
}

export default CategoryNameChangeButton
