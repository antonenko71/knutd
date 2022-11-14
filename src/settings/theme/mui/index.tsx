import { createTheme } from '@mui/material';

const muiTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: 'relative',
          backgroundColor: '#000'
        }
      }
    }
  },
  typography: {
    h1: {
      fontSize: 47,
      fontWeight: 'bold',
      color: '#feaab6'
    },
    h2: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#feaab6'
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#eceaee'
    }
  }
});

export default muiTheme;
