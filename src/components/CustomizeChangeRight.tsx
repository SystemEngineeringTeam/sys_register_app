import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';
import OkeyButton from './OkeyButton';
import OrderDelete from './OrderDelete';
import OrderNumber from './OrderNumber';

interface CustomizeChangeRightProps {
  id:string;
}

function  CustomizeChangeRight({id}:CustomizeChangeRightProps) {
  
  return (
    <div>
      <Box sx={{ 
        position: 'fixed', // スクロールしても固定
        height: '100vh',
        width: '20vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        
        }}>
        <Box sx={{ fontSize: '30px' }}>
          {/* 注文番号表示 */}
        <Box sx={{ mt : '50px' }}>
          <OrderNumber id={id} />
        </Box>
        </Box>

        <Box sx={{ mt:'120%' }}>
          <Box>
            <OrderDelete />
          </Box>
          <Box sx={{ mt:'20%'}}>
            <OkeyButton />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CustomizeChangeRight;
