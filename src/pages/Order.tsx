import React from 'react';
import NumberButton from '../components/NumberButton';
import { Box, Grid } from '@mui/material';


const Order = ( ) => {
    const orders = [1,2,3,4,4,5,4,231,345,632,123,354,534,243,632,122,234,544,343,245,324,332,344];
    const number = orders.length;
    
  return (
    <div>
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'row',
          wordBreak: 'break-word',
          flexWrap: 'wrap',
        }}
      >
        
        {orders.map((value) => (
            <NumberButton order={value} />
            
        )
        )}
        
      </Grid>
      <Grid item sx={{ 
        background:'#c8c8c8',
        textAlign: 'center',
        fontSize: '70px',
        marginBottom: '0',
        padding: '10px 0', // 必要に応じてパディングを調整
        }}>支払い待ち人数 : {number}人</Grid>
    </div>
    
    )}
export default Order;