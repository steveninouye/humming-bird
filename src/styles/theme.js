import { createTheme } from '@mui/material/styles';

// Create a theme instance.
// Theme creator: https://bareynol.github.io/mui-theme-creator/
// Color palettes: https://material.io/inline-tools/color/
// Color tool: https://material.io/tools/color/
const theme = createTheme({
  palette: {
    primary: {
      main: '#0a8a95',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme;
