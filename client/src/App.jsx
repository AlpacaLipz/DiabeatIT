import React from 'react';
import './App.css';
import { MuiNavBar } from './components/MuiNavBar';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { ThemeProvider, Box, createTheme, colors  } from '@mui/material';







const theme = createTheme({
  status: {
    danger: '#212121',
  },
  palette:{
  secondary:{
    main: colors.pink['A400'],
    },
  success:{
    main: colors.grey[900]
  },
  info:{
    main: colors.lightBlue[300]
  },
  text: {
    primary: '#212121',
    secondary: '#212121',
  }
  },
  typography: {
    allVariants: {
      color: 'black'
      
    },
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <MuiNavBar  />

      <MuiBottomNavigation />
    </Box>
    </ThemeProvider>
  );
}
export default App;