import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '40px' }}>
      <Typography variant="h4" gutterBottom>
        SysPay
      </Typography>
      <Typography variant="body1" gutterBottom>
        システム工学研究会のPOSシステム
      </Typography>

      {/* おしゃれなメインロゴ */}
      <Box component="img" sx={{ width: '300px', margin: '20px auto' }} src="" alt="ロゴ募集中" />
    </Box>
  );
};

export default Home;
