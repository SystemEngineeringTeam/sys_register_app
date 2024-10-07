import { Box, Button } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface MoneyPaidProps {
  // 割引金額
  discountAmount: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  totalAmount: number;
  // チケットの合計金額
  tiketAmount: number;
}
const DiscountAmount = ({ discountAmount, count, setCount, totalAmount, tiketAmount }: MoneyPaidProps) => {
  return (
    <div>
      <Box
        sx={{
          userSelect: 'none',
          border: 0.5,
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
        <Button
          //
          onClick={() => {
            // totalAmountは値引き後の値段なので、商品の合計金額-値引き金額 =  totalAmount
            // totalAmount - tiketAmount は値引き後の金額が、チケットの合計金額を超えていないとき
            if (totalAmount - tiketAmount - discountAmount >= 0) {
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
        >
          {discountAmount}円割引
        </Button>
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

export default DiscountAmount;
