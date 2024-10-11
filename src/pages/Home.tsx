import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '40px' }}>
      {/* おしゃれなメインロゴ */}
      <Box
        alt="ロゴ募集中"
        component="img"
        src="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2FSysPay.PNG?alt=media&token=f6af1ec4-ec82-41aa-b58d-5805de1c2ad8"
        sx={{ width: '300px', margin: '20px auto' }}
      />
      <Typography gutterBottom variant="body1">
        制作：システム工学研究会
      </Typography>
    </Box>
  );
};

export default Home;
