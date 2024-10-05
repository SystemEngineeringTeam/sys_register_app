import { Box } from '@mui/material';

interface WritePaidSumMoneyProps {
  totalAmount: number;
  totalPayment: number;
}
const WritePaidSumMoney = ({ totalAmount, totalPayment }: WritePaidSumMoneyProps) => {
  return (
    <Box
      sx={{
        userSelect: 'none',
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>お支払い</Box>
        <Box sx={{ textAlign: 'right' }}>{totalPayment}円</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>合計金額</Box>
        <Box sx={{ textAlign: 'right' }}>{totalAmount}円</Box>
      </Box>
    </Box>
  );
};

export default WritePaidSumMoney;
