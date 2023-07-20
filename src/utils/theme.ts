import { createTheme } from '@mui/material/styles';

import '@fontsource/poppins';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const theme = createTheme({
  palette: {
    background: {
      default: '#F3F5F7',
    },
    primary: {
      main: '#FFFFFF',
      contrastText: '#4F2D80',
    },
    secondary: {
      main: '#4F2D80',
    },
    success: {
      main: '#56C57D',
      contrastText: '#F6F6F6',
    },
    error: {
      main: '#DE5159',
      contrastText: '#F6F6F6',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', '"Segoe UI"'].join(','),
  },
  transitions: {
    duration: {
      short: 300,
    },
  },
  components: {
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          borderRadius: '5px',
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #09378C33',
            backgroundColor: 'transparent',
            opacity: 1,
            fontSize: '15px',
            height: '42px',
            '&:hover': {
              background: '#4F2D80',
              color: '#FFFFFF',
            },
          },
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#4F2D80',
          '&.Mui-checked': {
            color: '#4F2D80',
          },
        },
      },
    },
  },
});
