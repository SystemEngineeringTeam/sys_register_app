import { Box } from '@mui/material';

const WritePaidSumMoney = () => {
  return (
    <Box
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box>お支払い</Box>
        {/* 仮置き */}
        <Box sx={{ marginLeft: '5rem' }}>1000円</Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box>合計金額</Box>
        {/* 仮置き */}
        <Box sx={{ marginLeft: '5rem' }}>1000円</Box>
      </Box>
    </Box>
  );
};

export default WritePaidSumMoney;
