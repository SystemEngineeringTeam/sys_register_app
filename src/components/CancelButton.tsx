import { Box, Button } from '@mui/material'
import React from 'react'

const CancelButton = () => {
  return (
    <div>
      <Button sx={{bgcolor:'gray', color:'black' , py:'10px',width:'150px',borderRadius:'20px'}}>
        <Box fontSize={'20px'}>Cancel</Box>
      </Button>
    </div>
  )
}

export default CancelButton
