import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import { theme } from '../../themes/theme';

interface BackButtonProps {
  text: string;
  themeColor: 'categoryEdit' | 'addItem';
}

const ScreenChengeButton = ({ themeColor, text }: BackButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color={themeColor}
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
