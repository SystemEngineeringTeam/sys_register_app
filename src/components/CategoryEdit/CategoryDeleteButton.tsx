import { Button } from '@mui/material'
import React, { useState } from 'react'




function CategoryDeleteButton() {
    const [selectedChange,setSelectedChange] = useState(true);

    const ClickDeleteButton = () => {
        setSelectedChange(!selectedChange);
    }
    
  return (
    <div>
        <Button variant="contained"
        disableElevation 
        onClick={ClickDeleteButton} 
        sx={{bgcolor:selectedChange ? 'red' : 'gray' , color:'black', fontSize:'20px' , width:'10rem'}}>消去</Button>
      
    </div>
  )
}

export default CategoryDeleteButton
