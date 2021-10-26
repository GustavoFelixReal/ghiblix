import { AppProps } from 'next/app';
import { CustomThemeProvider } from '../hooks/useCustomTheme';
import Router from 'next/router';

/* Resources */
import nProgress from 'nprogress';

/* Components */
import { FavoritesProvider } from '../hooks/useFavorites';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { Main } from '../styles/main';
import { ToastContainer } from 'react-toastify';

/* Styles */
import { GlobalStyles } from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';

nProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeError', () => nProgress.done());
Router.events.on('routeChangeComplete', () => nProgress.done());

function Application({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <FavoritesProvider>
        <ToastContainer
          position="top-center"
          toastClassName="toast-background"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

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
