import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#123458',
      contrastText: '#F1EFEC', // button text on primary
    },
    secondary: {
      main: '#D4C9BE',
    },
    background: {
      default: '#F1EFEC',
      paper: '#D4C9BE',
    },
    text: {
      primary: '#030303',
    },
  },
});

export default theme;
