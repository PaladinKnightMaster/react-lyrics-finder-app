// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff4081', // Vibrant pink
    },
    secondary: {
      main: '#3f51b5', // Calming blue
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4081', // Vibrant pink
    },
    secondary: {
      main: '#3f51b5', // Calming blue
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});
