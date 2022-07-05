import { lightBlue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[400],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#f7f7f7',
          '&:haver': {
            background: 'pink',
          },
        },
      },
    },
  },
});

export interface IMaterialUiThemeProvider {
  children?: React.ReactNode;
}

const MaterialUiThemeProvider: React.FC<IMaterialUiThemeProvider> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUiThemeProvider;
