import { Button } from '@mui/material'
import React from 'react'

function AddButton() {
  return (
    <div>
      <Button
        disableElevation
        size="large"
        sx={{ backgroundColor:  'primary' }}
        variant="contained"
      >
        完了
      </Button>
    </div>
  )
}

export default AddButton
