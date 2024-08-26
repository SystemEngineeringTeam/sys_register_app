import { Box } from '@mui/material'
import React from 'react'
import NumberButton from './NumberButton'

interface NumberButtonBoxProps{
    orders:number[];
}

const NumberButtonBox = ({orders}:NumberButtonBoxProps) => {
  
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          wordBreak: 'break-word',
          flexWrap: 'wrap',
        }}
      >
        
        {orders.map((value) => (
            <NumberButton orders={value} />
            
        )
        )}
        
      </Box>
    </div>
  )
}

export default NumberButtonBox
