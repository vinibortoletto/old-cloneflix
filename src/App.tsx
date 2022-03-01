// Libs
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { AppRoutes } from './routes/routes';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Styles
import { GlobalStyles } from './helpers/styles/GlobalStyles';

export default function App() {
  const pathname = useLocation().pathname;

  // Scroll to top when routes change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GlobalStyles pathname={pathname} />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
