import { Box } from '@mui/material';
import { red } from '@mui/material/colors';

const WriteNotEnoughMoney = () => {
  return (
      <Box
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
          color: red[400],
          display: 'flex',
        }}
      >
        <Box>不足金額</Box>
        {/* 仮置き */}
        <Box sx={{ marginLeft: {sm: '7rem', md: '8rem'} }}>1000円</Box>
      </Box>
  );
};

export default WriteNotEnoughMoney;
