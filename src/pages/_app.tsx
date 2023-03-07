import { ThemeProvider } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';

import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { LanguageProvider } from '../contexts/LanguageContext';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />

        <Toaster position="bottom-right" />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
