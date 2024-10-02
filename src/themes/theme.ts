import { createTheme, type PaletteColor, type PaletteColorOptions } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    ok: PaletteColor;
    back: PaletteColor;
  }
  interface PaletteOptions {
    ok?: PaletteColorOptions;
    back?: PaletteColorOptions;
  }
}
export const theme = createTheme({
  palette: {
    ok: {
      main: orange[600],
      light: orange[500],
      dark: orange[700],
      contrastText: '#fff',
    },
    back: {
      main: grey[500],
      light: grey[400],
      dark: grey[600],
      contrastText: '#fff',
    },
  },
});
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ok: true;
    back: true;
  }
}
