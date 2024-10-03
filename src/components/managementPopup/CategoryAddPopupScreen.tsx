import { Box, Button, Stack } from '@mui/material';
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
        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '40px' }}>
          本当に消去しますか？
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
          変更は保存されません
        </Box>

        <Stack direction={'row'} fontSize={'40px'} sx={{ mt: '15%', justifyContent: 'right', mr: '7rem', mb: '20px' }}>
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
