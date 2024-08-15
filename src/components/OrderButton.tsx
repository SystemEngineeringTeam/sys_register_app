import { Box, Button, Grid } from '@mui/material'
import React from 'react'

function OrderButton() {
  return (
    <div>
      <Button variant='contained' disableElevation size='large' onClick={()=>{
        console.log('お支払いへ')
      }}
      sx={{
        background:'#F68B1F',
        py: '20px',  
        width: '100%',
      }}
      >
      お支払いへ
      </Button>
      {/* <Grid item sx={{ 
        background:'#F68B1F',
        padding: '10px 20px', // 必要に応じてパディングを調整
        bottom:'20px',
        color:'#FFFFFF',
       fontSize:{xs:"none",sm:"none",md:"1.5rem"},
       display: {
        xs: 'none', // 600px未満の画面幅では非表示
        sm: 'none', // 600px〜900pxの画面幅では非表示
        md: 'block', // 900px以上の画面幅では表示
      },
        }}>
        お支払いへ
      </Grid> */}
    </div>
  )
}

export default OrderButton
