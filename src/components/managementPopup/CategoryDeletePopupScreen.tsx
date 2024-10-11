import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CancelButton from './CancelButton';
import DeleteYesButton from './DeleteYesButton';

interface CategoryAddPopupScreenProp {
  iconClose: () => void;
  orderName: string
}

const CategoryDeletePopupScreen = ({ iconClose , orderName}: CategoryAddPopupScreenProp) => {
  const [selectedChangeCancel, setSelectedChangeCalcel] = useState(true);
  const [selectedChangeOkey, setSelectedChangeOkey] = useState(true);
  return (
    <div>
      <Stack sx={{ textAlign: 'center' }}>
        <Box sx={{ textAlign: 'right' }}>
          <ClearIcon onClick={iconClose} sx={{ fontSize: '80px' }} />
        </Box>

        {/* <Box sx={{ textAlign: 'right' }}>
          <IconButton onClick={iconClose}>
            <ClearIcon sx={{ fontSize: '80px' }} />
          </IconButton>
        </Box> */}

        {/* fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' */}
        <Box sx={{ mt: '30px' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 2.0vw, 4.2rem)' }}>本当に消去しますか？</Typography>
        </Box>

        <Box sx={{ mt: '5rem' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 3.0vw, 5.0rem)' }}>カテゴリー:{orderName}</Typography>
        </Box>

        <Box sx={{ mt: '5rem' }}>
          <Typography sx={{ fontSize: 'clamp(1.0rem, 0.5rem + 1.4vw, 3rem)' }}>
            そのカテゴリーにある商品は全て削除されます
          </Typography>
        </Box>

        <Stack direction="row" fontSize="40px" sx={{ mt: '10%', justifyContent: 'right', mr: '7rem' }}>
          <Button onClick={iconClose}>
            <CancelButton
              selectedChangeCancel={selectedChangeCancel}
              setSelectedChangeCancel={setSelectedChangeCalcel}
              
            />
          </Button>
          <Button>
            <DeleteYesButton selectedChangeOkey={selectedChangeOkey} setSelectedChangeOkey={setSelectedChangeOkey}
            //orderName={orderName}
            />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default CategoryDeletePopupScreen;
