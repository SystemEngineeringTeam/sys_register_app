import { Box, Stack } from '@mui/material';
import React from 'react';
import Yakitori from '/yakitori.png';
import OrderMenueName from './OrderMenueName';
import OrderMenueCustomize from './OrderMenueCustomize';
import { BorderBottom } from '@mui/icons-material';

interface OrderMenueContenaProps{
    ordername:string;
}

const OrderMenueContena = ({ordername}:OrderMenueContenaProps) => {
  const imageDisplaySize = { width: 150, height: 150 };
  const custommenu = ['たれ','塩','レモン','こしょう','チーズ','みそ','カレー',];
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          border: '2px solid #2b2b2b',
          width: '60vw', // ビューポート全体の横幅を占める。横幅いっぱいにする
        }}
      >
        <Stack
          sx={{
           
            flex: 0.8,
            textAlign: 'center',
          }}
        >
          {/* flexは幅の割合 */}
          <Box>
            <img src={Yakitori} className="yakitori" style={imageDisplaySize} />
          </Box>
        </Stack>

        <Stack sx={{ flex: 3 }}>
          <Stack>
            <OrderMenueName ordername={ordername}/>
          </Stack>
          <Stack sx={{ flex: 4 }}>

            {custommenu.map((menu) => (
                <OrderMenueCustomize custom={menu} />
            ))}
            

          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrderMenueContena;
