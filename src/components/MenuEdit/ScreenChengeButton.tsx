import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import { theme } from '../../themes/theme';
import { Link } from 'react-router-dom';
import { category } from '@/types';

interface BackButtonProps {
  text: string;
  themeColor: 'categoryEdit' | 'addItem';
  selectAdd: string;
  categorys?: category[];
}

const ScreenChengeButton = ({
  themeColor,
  text,
  selectAdd,
  categorys,
}: BackButtonProps) => {
  const link = text === 'カテゴリー編集' ? '/categoryedit' : '/test';

  const state = link === '/test' ? { selectAdd, categorys } : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Button
        color={themeColor}
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
    </ThemeProvider>
  );
};

export default ScreenChengeButton;
