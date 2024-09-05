import { Box, Stack } from '@mui/material';
import React from 'react';
import Yakitori from '/yakitori.png';
import OrderMenueName from './OrderMenueName';
import OrderMenueCustomize from './OrderMenueCustomize';
import { BorderBottom } from '@mui/icons-material';

interface OrderMenueContenaProps {
  ordername: string;
  orderprice: number;
  orderimg: string;
}

const OrderMenueContena = ({ ordername, orderprice, orderimg }: OrderMenueContenaProps) => {
  const imageDisplaySize = { width: 200, height: 200 };
  const custommenus = [
    { menu: 'たれ', price: 30 },
    { menu: '塩', price: 10 },
    { menu: 'チーズ', price: 20 },
    { menu: '辛い', price: 20 },
    { menu: '青のり', price: 10 },
  ];

  return (
    <div>
      <Stack
        direction="row"
        sx={{
          borderBottom: '1px solid #2b2b2b',
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
            <OrderMenueName ordername={ordername} orderprice={orderprice} />
          </Stack>
          <Stack>
            {custommenus.map((menu) => (
              <OrderMenueCustomize custom={menu.menu} customprice={menu.price} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrderMenueContena;
