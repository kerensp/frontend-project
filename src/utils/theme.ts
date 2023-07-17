import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // color primario
      contrastText: '#4F2D80', // color para el texto contrastante
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', '"Segoe UI"'].join(','),
  },
});
