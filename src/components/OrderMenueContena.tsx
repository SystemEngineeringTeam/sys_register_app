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
}

const OrderMenueContena = ({ ordername, orderprice, orderimg }: OrderMenueContenaProps) => {
  const imageDisplaySize = { width: 200, height: 200 };
  // const custommenus = [
  //   { menu: 'たれ', price: 30 },
  //   { menu: '塩', price: 10 },
  //   { menu: 'チーズ', price: 20 },
  //   { menu: '辛い', price: 20 },
  //   { menu: '青のり', price: 10 },
  // ];

  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);

  switch (orderCollectionData.state) {
    case 'loading':
      return <p>Loading...</p>;

    case 'hasError':
      return <p>Error</p>;

    case 'hasData':
      const processedCustom = processCustomizeChange((orderCollectionData.data || [])
      .flatMap((order) => 
          order.order.flatMap((o) => 
            o.options
          ))
      )
    
        console.log('〜 ProcessedCustom:',processedCustom);
       

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
            {processedCustom.map((menu) => (
              <OrderMenueCustomize custom={menu.name} customprice={menu.price} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};
}

export default OrderMenueContena;
