import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import TextField from '@mui/material/TextField';

const CategoryNameChangeScreen = () => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);

  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'right' }}>
          <ClearIcon sx={{ fontSize: '80px' }} />
        </Box>

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '20px' }}>
          現在の名前
        </Box>

        <Box fontSize={{ xs: '10px', sm: '30px', md: '50px' }} sx={{ mt: '10px' }}>
          フード
        </Box>

        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '10rem' }}>
          変更後の名前
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '1rem' }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" multiline maxRows={6} />
        </Box>

        <Stack direction={'row'} fontSize={'40px'} sx={{ mt: '5%', justifyContent: 'right', mr: '7rem', mb: '20px' }}>
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

export default CategoryNameChangeScreen;
