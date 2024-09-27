import { Box } from '@mui/material';
import React from 'react';
import NumberButton from './NumberButton';
import { items } from '../types';
import { processNumber, processOrderChange } from '../utils/processOrderChange';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { processOrderCollection } from '@/utils/processOrderCollection';
import { processCustomizeChange } from '@/utils/processCustomizeChange';
import { useMoney } from '@/firebase/useMoney';

interface NumberButtonProps{
  ordersId: number[];
}

const NumberButtonBox = ({ordersId}:NumberButtonProps) => {


  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          wordBreak: 'break-word',
          flexWrap: 'wrap',
        }}
      >
        {ordersId.map((value) => {
          return (
            <NumberButton
              ordersId={value}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default NumberButtonBox;
