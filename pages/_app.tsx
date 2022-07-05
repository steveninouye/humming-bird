import MaterialUiThemeProvider from 'components/Providers/MaterialUiThemeProvider';
import type { AppProps } from 'next/app';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MaterialUiThemeProvider>
      <Component {...pageProps} />
    </MaterialUiThemeProvider>
  );
}

export default MyApp;
