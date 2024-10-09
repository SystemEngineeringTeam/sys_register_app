import { Box, CardMedia } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { useEffect, useState } from 'react';
import { type money } from '@/types';

interface MoneyPaidProps {
  image: string;
  num: 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000;
  setPaymentMoney: React.Dispatch<React.SetStateAction<money>>;
}
const MoneyPaid = ({ image, num, setPaymentMoney }: MoneyPaidProps) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setMoneyFnc(count, num, setPaymentMoney);
  }, [count]);

  return (
    <div>
      <Box
        sx={{
          border: 0.5,
          width: { xs: '7rem', sm: '9rem' },
          height: { xs: '7rem', sm: '9rem' },
          opacity: count === 0 ? '0.5' : '1',
          userSelect: 'none',
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
          image={image}
          onClick={() => {
            setCount((prevState) => prevState + 1);
          }}
          onDragStart={(e) => {
            e.preventDefault();
          }} // ドラッグを無効化
          sx={{
            display: 'flex',
            margin: 'auto',
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
          {count}
        </Box>
      </Box>
    </div>
  );
};

export default MoneyPaid;
