import { AppProps } from 'next/app';

/* Components */
import { FavoritesProvider } from '../hooks/useFavorites';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { Main } from '../styles/main';

/* Styles */
import { GlobalStyles } from '../styles/global';
import { theme } from '../providers/theme';
import { ThemeProvider } from 'styled-components';

function Application({ Component, pageProps }: AppProps) {
  let selectedTheme = 'light';

  if (typeof window !== 'undefined') {
    selectedTheme = localStorage?.getItem('theme') || 'light';
  }

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <FavoritesProvider>
        <Header />

        <Main>
          <Component {...pageProps} />
        </Main>

        <Footer />
        <GlobalStyles />
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default Application;
