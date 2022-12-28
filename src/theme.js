import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
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

export default theme;
