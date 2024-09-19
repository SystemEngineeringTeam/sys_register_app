import { Box, CardMedia } from '@mui/material';
import React from 'react';

interface MoneyChengeProps {
  image: string;
  ChengeCount: number;
}

const MoneyChenge = ({ image, ChengeCount }: MoneyChengeProps) => {
  return (
    <div>
      <Box
        sx={{
          border: 1,
          width: { xs: '7rem', sm: '9rem' },
          height: { xs: '7rem', sm: '9rem' },
          opacity: ChengeCount === 0 ? '0.3' : '1',
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            display: 'flex',
            margin: 'auto',
            marginTop: { xs: '1.2rem', sm: '1.8rem' },
            height: '50%',
            width: '100%',
            objectFit: 'fill',
            position: 'relative',
          }}
        />
        <Box
          sx={{
            textAlign: 'center',
            fontSize: { xs: '0.8rem', sm: '1.5rem' },
            position: 'relative',
          }}
        >
          {ChengeCount}
        </Box>
      </Box>
    </div>
  );
};

export default MoneyChenge;
