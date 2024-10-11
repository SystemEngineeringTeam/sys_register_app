import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import { theme } from '../../themes/theme';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  text: string;
  selectAdd: string;
}

const ScreenChengeRegister = ({ text }: BackButtonProps) => {
  const link = '/registerMoney';

  const state = undefined;

  return (
    <Button
      component={Link}
      state={{ state }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
        width: { xs: '8rem', sm: '10rem', md: '14rem' },
        height: { xs: '4rem', sm: '6rem', md: '8rem' },
      }}
      to={link}
      variant="contained"
    >
      {text}
    </Button>
  );
};

export default ScreenChengeRegister;
