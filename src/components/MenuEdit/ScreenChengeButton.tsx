import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import { theme } from '../../themes/theme';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  text: string;
  themeColor: 'categoryEdit' | 'addItem';
  selectAdd: string;
  selectEdit: string;
}

const ScreenChengeButton = ({ themeColor, text, 
  selectAdd, selectEdit 
}: BackButtonProps) => {

const state = (
  (text === "カテゴリー編集" ? {selectEdit} : {selectAdd})
)


  return (
    <ThemeProvider theme={theme}>
      <Button
        color={themeColor}
        component={Link}
        to="/test"
        state={{state}}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
          width: { xs: '8rem', sm: '10rem', md: '14rem' },
          height: { xs: '4rem', sm: '6rem', md: '8rem' },
        }}
        variant="contained"
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default ScreenChengeButton;
