import { Box, Stack } from '@mui/material';
import React from 'react';
import Yakitori from '/yakitori.png';
import OrderMenueName from './OrderMenueName';
import OrderMenueCustomize from './OrderMenueCustomize';
import { BorderBottom } from '@mui/icons-material';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processCustomizeChange } from '../utils/processCustomizeChange';

interface OrderMenueContenaProps {
  ordername: string;
  orderprice: number;
  orderimg: string;
  menuqty: number;
  customizename: string;
  customizeprice: number;
}

const OrderMenueContena = ({
  ordername,
  orderprice,
  orderimg,
  menuqty,
  customizename,
  customizeprice,
}: OrderMenueContenaProps) => {
  const imageDisplaySize = { width: 200, height: 200 };
  // const custommenus = [
  //   { menu: 'たれ', price: 30 },
  //   { menu: '塩', price: 10 },
  //   { menu: 'チーズ', price: 20 },
  //   { menu: '辛い', price: 20 },
  //   { menu: '青のり', price: 10 },
  // ];

  console.log('menuqty:' + menuqty);
  console.log('customizename:' + customizename);
  console.log('customizeprice:' + customizeprice);

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
          <Stack sx={{mr:'20px'}}>
            <OrderMenueName
              ordername={ordername}
              orderprice={orderprice}
              menuqty={menuqty}
              customizename={customizename}
            />
          </Stack>
          <Stack sx={{ml:'20px', mr:'20px'}}>
            <OrderMenueCustomize custom={customizename} customprice={customizeprice} />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrderMenueContena;
