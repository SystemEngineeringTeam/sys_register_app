import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
import { theme } from '../../themes/theme';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
  id: string;
}

const BackButton = ({to,id}:BackButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Link to={to} state={id}>
      <Button
        variant="contained"
        color="back"
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          width: { xs: '6rem', sm: '8rem', md: '10rem' },
          height: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
        }}
      >
        戻る
      </Button>
      </Link>
    </ThemeProvider>
  );
};

export default BackButton;
