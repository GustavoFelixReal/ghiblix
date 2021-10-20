import { AppProps } from 'next/app';

/* Components */
import { FavoritesProvider } from '../hooks/useFavorites';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { Main } from '../styles/main';

/* Styles */
import { GlobalStyles } from '../styles/global';

function Application({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <Header />

      <Main>
        <Component {...pageProps} />
      </Main>
      
      <Footer />
      <GlobalStyles />
    </FavoritesProvider>
  );
}

export default Application;
