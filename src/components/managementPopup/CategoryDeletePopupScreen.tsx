import React, { useState } from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import ClearIcon from '@mui/icons-material/Clear';
import { processOrderChange } from '@/utils/processOrderChange';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { processOrderCollection } from '@/utils/processOrderCollection';

const CategoryDeletePopupScreen = () => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);
  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'right' }}>
          <ClearIcon sx={{ fontSize: '80px' }} />
        </Box>

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box sx={{ mt: '30px' }}>
        <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 4.2rem)' }}>本当に消去しますか？</Typography>
        </Box>

        <Box sx={{ mt: '5rem' }}>
        <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 3.0vw, 5.0rem)' }}>カテゴリー:フード</Typography>
        </Box>

        <Box  sx={{ mt: '5rem' }}>
        <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 1.4vw, 3rem)' }}>そのカテゴリーにある商品は全て削除されます</Typography>
        </Box>

        <Stack direction={'row'} fontSize={'40px'} sx={{ mt: '10%', justifyContent: 'right', mr: '7rem' }}>
          <Button>
            <CancelButton
              selectedChangeCancel={selectedChangeCancel}
              setSelectedChangeCancel={setSelectedChangeCalcel}
            />
          </Button>
          <Button>
            <DeleteYesButton selectedChangeOkey={selectedChangeOkey} setSelectedChangeOkey={setSelectedChangeOkey} />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default CategoryDeletePopupScreen;
