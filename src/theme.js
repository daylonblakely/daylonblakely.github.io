import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#775e40',
    },
    secondary: {
      main: '#5b507a',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#f1ebe4',
      paper: '#f8f5f2',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#775e40',
    },
    secondary: {
      main: '#5b507a',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
});
