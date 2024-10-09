import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';

interface CategoryNameAddScreen{
  iconClose: () => void;
  
}

const CategoryNameAddScreen = ({iconClose}:CategoryNameAddScreen) => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);

  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
      <Box sx={{ textAlign: 'right' }}>
          <ClearIcon onClick={iconClose} sx={{ fontSize: '80px' }} />
        </Box>

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box fontSize={{ xs: '20px', sm: '40px', md: '60px' }} sx={{ mt: '40px' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 4.2rem)' }}>カテゴリ追加</Typography>
        </Box>

        <Box fontSize={{ xs: '10px', sm: '20px', md: '30px' }} sx={{ mt: '5rem' }}>
          <TextField id="outlined-basic" label="Outlined" maxRows={6} multiline variant="outlined" />
        </Box>

        <Stack direction="row" fontSize="40px" sx={{ mt: '300px', justifyContent: 'right', mr: '7rem' }}>
          <Button onClick={iconClose}>
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

export default CategoryNameAddScreen;
