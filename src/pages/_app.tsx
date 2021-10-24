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
import 'react-toastify/dist/ReactToastify.css';

function Application({ Component, pageProps }: AppProps) {
  let selectedTheme = 'dark';

  if (typeof window !== 'undefined') {
    selectedTheme = localStorage?.getItem('theme') || 'dark';
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
