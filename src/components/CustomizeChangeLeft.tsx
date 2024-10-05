import React from 'react';
import CustomizeMenu from './CustomizeMenu';
import { Box } from '@mui/material';
import CustmizeGraf from './CustmizeGraf';
import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { processCustomizeChange } from '../utils/processCustomizeChange';
import { processOrderChange } from '../utils/processOrderChange';
import { Link } from 'react-router-dom';
import { useOrderCollection } from '@/firebase/useOrderCollection';

interface CustomizeChangeLeftProps {
  processedoptions: string;
  customizename: string;
}

function CustomizeChangeLeft({ processedoptions, customizename }: CustomizeChangeLeftProps) {
  //const customizechanges = ['カスタマイズ1', 'カスタマイズ2', 'カスタマイズ3'];

  const { data } = useOrderCollection();

  
      const processCustmize = processCustomizeChange(
        (data || []).flatMap((order) => order.order.flatMap((o) => o.options)),
      );

      // const processOrder = processOrderChange(
      //   (orderCollectionData.data || [])
      //   .flatMap((order) => order.order.flatMap((o) => o.item)),
      // );

      console.log('🚀 ~ CustomizeChangeLeft ~ processCustmize:', processCustmize);

      return (
        <div>
          <Box sx={{ ml: '50px' }}>
            <Link to="/orderchange">
              <Box>
                <CustomizeMenu ordername={processedoptions || ''} />

                {/* <CustomizeMenu  processedoptions={state.menu} orders={state.menu}/> */}
              </Box>
            </Link>
            <Box sx={{ fontSize: '30px' }}>カスタマイズ</Box>
            <Box>
              <CustmizeGraf customize={customizename || ''} />
            </Box>
          </Box>
        </div>
      );
  }

export default CustomizeChangeLeft;