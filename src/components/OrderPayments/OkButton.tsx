import { Button, ThemeProvider } from '@mui/material';

import { theme } from '../../themes/theme';



const OkButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="ok"
        sx={{
          fontSize:{ xs: '2rem', sm: '2.5rem', md: '3rem' },
          width: { xs: '6rem', sm: '8rem', md: '10rem' },
          height: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
        }}
      >
        OK
      </Button>
    </ThemeProvider>
  );
};

export default OkButton;
