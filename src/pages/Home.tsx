<<<<<<< HEAD
const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Homeページです</p>
  </div>
);
=======
import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '40px' }}>
      <Typography gutterBottom variant="h4">
        SysPay
      </Typography>
      <Typography gutterBottom variant="body1">
        システム工学研究会のPOSシステム
      </Typography>

      {/* おしゃれなメインロゴ */}
      <Box alt="ロゴ募集中" component="img" src="" sx={{ width: '300px', margin: '20px auto' }} />
    </Box>
  );
};
>>>>>>> develop

export default Home;
