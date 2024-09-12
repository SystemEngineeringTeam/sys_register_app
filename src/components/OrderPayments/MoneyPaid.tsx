import { useState } from 'react';
import { Box, CardMedia } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface MoneyPaidProps {
  image: string;
}
const MoneyPaid = ({ image }: MoneyPaidProps) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Box
        sx={{
          border: 1,
          width: { xs: '7rem', sm: '9rem' },
          height: { xs: '7rem', sm: '9rem' },
          opacity: count === 0 ? '0.5' : '1',
        }}
      >
        {/* 0以上の値の場合、クリック時にcountを -1 */}
        <RemoveCircleIcon
          onClick={() => {
            if (count > 0) {
              setCount((prevState) => prevState - 1);
            }
          }}
        />
        <CardMedia
          component="img"
          sx={{
            display: 'flex',
            margin: 'auto',
            height: '50%',
            width: '100%',
            objectFit: 'fill',
            position: 'relative',
          }}
          onClick={() => {
            setCount((prevState) => prevState + 1);
          }}
          image={image}
        />
        <Box
          sx={{
            textAlign: 'center',
            fontSize: { xs: '0.8rem', sm: '1.5rem' },
            position: 'relative',
          }}
        >
          {count}
        </Box>
      </Box>
    </div>
  );
};

export default MoneyPaid;
