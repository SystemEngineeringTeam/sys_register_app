import { Box, CardMedia } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface MoneyPaidProps {
  image: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const MoneyPaid = ({ image, count, setCount }: MoneyPaidProps) => {
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
          onDragStart={(e) => {
            e.preventDefault();
          }} // ドラッグを無効化
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
