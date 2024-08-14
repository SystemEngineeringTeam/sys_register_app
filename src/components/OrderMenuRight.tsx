import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';

function OrderMenuRight() {
  return (
    <div>
      <Box sx={{position:'fixed'}}>
        <Box sx={{fontSize:'30px',pl:'200px', pt: '30px' }}>注文番号</Box>
        <Box>
          <Box sx={{pt:'550px', pl:'200px',fontSize: { xs: 'none', sm: 'none', md: '2rem' },
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              }
              }}>

            計
            </Box>
            <Box sx={{  pl:'200px',fontSize: { xs: 'none', sm: 'none', md: '3rem' },
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
            },
          }}>1,600</Box>

        </Box>
        <Box
          sx={{
            ml:'170px',
            my:'30px',
            background: '#F68B1F',
            padding: '10px 20px', // 必要に応じてパディングを調整
            color: '#FFFFFF',
            fontSize: { xs: 'none', sm: 'none', md: '2.5rem' },
            display: {
              xs: 'none', // 600px未満の画面幅では非表示
              sm: 'none', // 600px〜900pxの画面幅では非表示
              md: 'block', // 900px以上の画面幅では表示
            },
          }}
        >
          お支払いへ
        </Box>
      </Box>

      {/* <Box><OrderButton /></Box> */}
    </div>
  );
}

export default OrderMenuRight;
