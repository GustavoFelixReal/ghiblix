import { AppProps } from 'next/app';

/* Components */
import { FavoritesProvider } from '../hooks/useFavorites';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { Main } from '../styles/main';

/* Styles */
import { GlobalStyles } from '../styles/global';
import { CustomThemeProvider } from '../hooks/useCustomTheme';

function Application({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <FavoritesProvider>
        <Header />

        <Main>
          <Component {...pageProps} />
        </Main>

        <Footer />

        <GlobalStyles />
      </FavoritesProvider>
    </CustomThemeProvider>
  );
}

export default Application;
