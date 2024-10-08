import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';
import TextField from '@mui/material/TextField';

interface CategoryNameChangeScreen {
  iconClose: () => void;
}

const CategoryNameChangeScreen = ({ iconClose }: CategoryNameChangeScreen) => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);

  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'right' }}>
          <ClearIcon onClick={iconClose} sx={{ fontSize: '80px' }} />
        </Box>

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box sx={{ mt: '20px' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 4.2rem)' }}>現在の名前</Typography>
        </Box>

        <Box sx={{ mt: '10px' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 3.2rem)' }}>フード</Typography>
        </Box>

        <Box sx={{ mt: '10rem' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.4rem + 2.0vw, 2.0rem)' }}>変更後の名前</Typography>
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '1rem' }}>
          <TextField id="outlined-basic" label="Outlined" maxRows={6} multiline variant="outlined" />
        </Box>

        <Stack direction="row" fontSize="40px" sx={{ mt: '5%', justifyContent: 'right', mr: '7rem' }}>
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
