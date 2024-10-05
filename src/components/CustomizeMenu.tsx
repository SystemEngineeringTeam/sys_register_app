import { Box, Stack } from '@mui/material';
import React from 'react';
import Yakitori from '/yakitori.png';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processOrderChange } from '../utils/processOrderChange';

interface CustomizeMenuProps {
  ordername: string;
}
function CustomizeMenu({ ordername }: CustomizeMenuProps) {
  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);
    
      // const processedOptions = processOrderChange(
      //   (orderCollectionData.data || [])
      //   .flatMap((order) => order.order.flatMap((o) => o.item)),
      // );
      //console.log('🚀 ~ Order ~ order:', processedOptions);

      const imageDisplaySize = { width: 200, height: 200 };
      return (
        <div>
          <Stack direction="row" alignItems="center">
            {/* alignItems="center"で真ん中に合わせて並べる */}
            <Box>
              <img src={Yakitori} className="yakitori" style={imageDisplaySize} />
            </Box>
            <Box sx={{ fontSize: '60px' }}>
              {/* {processedOptions.map((order) => (
                 order.name
              ))} */}
              {ordername}
            </Box>
          </Stack>
        </div>
      );
  }


export default CustomizeMenu;