import { Button } from '@mui/material'
import React from 'react'

function OkeyButton() {
    return (
        <div>
          <Button variant='contained' disableElevation size='large' onClick=
          {() => {
            console.log('お支払いへ')
        
          }}
           sx={{ 
            background:'#F68B1F',
            py: '20px', // 必要に応じてパディングを調整
            width:'40%',
            }}>
            決定
          </Button>
        </div>
      )
}

export default OkeyButton
