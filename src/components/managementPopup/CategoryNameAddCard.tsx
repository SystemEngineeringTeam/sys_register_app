import { Card } from '@mui/material'
import React from 'react'
import CategoryNameAddScreen from './CategoryNameAddScreen'

function CategoryNameAddCard() {
  return (
    <div>
      <Card sx={{ width: '70%', ml: '15%', mt: '5%', height: '50%' }}>
        <CategoryNameAddScreen />
      </Card>
    </div>
  )
}

export default CategoryNameAddCard
