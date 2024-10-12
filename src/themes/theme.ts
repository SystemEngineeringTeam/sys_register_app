import { createTheme, type PaletteColor, type PaletteColorOptions } from '@mui/material';
import { grey, orange, red, yellow } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    ok: PaletteColor;
    back: PaletteColor;
    categoryEdit: PaletteColor;
    addItem: PaletteColor;
    categoryCheeseColor: PaletteColor;
    categoryKetchupColor: PaletteColor;
    categoryMayonnaiseColor: PaletteColor;
    categoryTareColor: PaletteColor;
  }
  interface PaletteOptions {
    ok?: PaletteColorOptions;
    back?: PaletteColorOptions;
    categoryEdit?: PaletteColorOptions;
    addItem?: PaletteColorOptions;
    categoryCheeseColor?: PaletteColorOptions;
    categoryKetchupColor?: PaletteColorOptions;
    categoryMayonnaiseColor?: PaletteColorOptions;
    categoryTareColor?: PaletteColorOptions;
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
    categoryEdit: {
      main: grey[500],
      light: grey[400],
      dark: grey[600],
      contrastText: '#fff',
    },
    addItem: {
      main: orange[600],
      light: orange[500],
      dark: orange[700],
      contrastText: '#fff',
    },
    categoryCheeseColor: {
      main: orange[600],
      light: orange[500],
      dark: orange[700],
      contrastText: '#fff',
    },
    categoryKetchupColor: {
      main: red[300],
      light: red[200],
      dark: red[400],
      contrastText: '#fff',
    },
    categoryMayonnaiseColor: {
      main: yellow[600],
      light: yellow[500],
      dark: yellow[700],
      contrastText: '#fff',
    },
    categoryTareColor: {
      main: yellow[300],
      light: yellow[400],
      dark: yellow[600],
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ok: true;
    back: true;
    categoryEdit: true;
    addItem: true;
  }
}
