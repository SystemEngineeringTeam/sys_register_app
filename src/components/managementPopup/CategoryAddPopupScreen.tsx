import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import ClearIcon from '@mui/icons-material/Clear';

const CategoryAddPopupScreen = () => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);
  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'right' }}>
          <ClearIcon sx={{ fontSize: '80px' }} />
        </Box>

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box sx={{ mt: '40px' }}>
        <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.5vw, 4.2rem)' }}>本当に消去しますか？</Typography>
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
        <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 1.5vw, 3.7rem)' }}>変更は保存されません</Typography>
        </Box>

        <Stack direction={'row'} fontSize={'40px'} sx={{ mt: '15%', justifyContent: 'right', mr: '7rem'}}>
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

export default CategoryAddPopupScreen;
