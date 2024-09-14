import { Box } from '@mui/material';
import { grey, red } from '@mui/material/colors';

interface WriteNotEnoughMoneyProps {
  totalAmount: number;
  totalPayment: number;
}
const WriteNotEnoughMoney = ({ totalAmount, totalPayment }: WriteNotEnoughMoneyProps) => {
  return (
    <Box
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
        // 文字の色を不足金額なら赤、おつりなら黒で出す
        color: totalPayment - totalAmount <= 0 ? red[500] : grey,
        display: 'flex',
      }}
    >
      {/* 不足金額かおつりを出す */}
      <Box>{totalPayment - totalAmount <= 0 ? '不足金額' : 'おつり　'}</Box>
      {/* 絶対値で不足金額またはおつりを表示 */}
      <Box sx={{ marginLeft: '5rem' }}>{Math.abs(totalPayment - totalAmount)}円</Box>
    </Box>
  );
};

export default WriteNotEnoughMoney;
