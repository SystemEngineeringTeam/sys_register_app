import { Box, CardMedia } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface MoneyPaidProps {
  image: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  totalAmount: number;
}
// チケット1つの値段
const tiketAmount = 100;
const TiketCount = ({ image, count, setCount, totalAmount }: MoneyPaidProps) => {
  return (
    <div>
      <Box
        sx={{
          border: 2,
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
          image={image}
          //   チケットの合計金額 が 注文の合計金額 以下になるように
          onClick={() => {
            if ((count + 1) * tiketAmount <= totalAmount) {
              setCount((prevState) => prevState + 1);
            }
          }}
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

export default TiketCount;
