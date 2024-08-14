import { Box, Stack } from '@mui/material';
import React from 'react';
import Yakitori from '/yakitori.png';
import OrderMenueName from './OrderMenueName';
import OrderMenueCustomize from './OrderMenueCustomize';
import { BorderBottom } from '@mui/icons-material';

interface OrderMenueContenaProps{
    ordername:string;
    orderprice:number;
    orderimg:string;
}

const OrderMenueContena = ({ordername,orderprice,orderimg}:OrderMenueContenaProps) => {
  const imageDisplaySize = { width: 150, height: 150 };
  const custommenus = [
    {menu: 'たれ',price:20},
    {menu: '塩',price:20},
    {menu: 'レモン',price:10},
    {menu: 'こしょう',price:10},
    {menu: 'チーズ',price:20},
    {menu: 'みそ',price:10},
    {menu: '辛め',price:20},
  ];
 
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          borderBottom: '1px solid #2b2b2b',
          width:'150%'
        }}
      >
        <Stack
          sx={{
           
            flex: 1,
            textAlign: 'center',
          }}
        >
          {/* flexは幅の割合 */}
          <Box>
            <img src={orderimg} className="yakitori" style={imageDisplaySize} />
          </Box>
        </Stack>

        <Stack sx={{ flex: 5 }}>
          <Stack>
          
            <OrderMenueName 
            ordername={ordername} 
            orderprice={orderprice}
            />
    
            
          </Stack>
          <Stack sx={{ flex: 2 }}>

            {custommenus.map((menu) => (
                <OrderMenueCustomize 
                custom={menu.menu}
                customprice={menu.price} />
            ))}
            
            

          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrderMenueContena;
