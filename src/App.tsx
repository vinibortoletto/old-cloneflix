// Libs
import React from 'react';
import { useLocation } from 'react-router';
import { AppRoutes } from './routes/routes';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Styles
import { GlobalStyles } from './helpers/styles/GlobalStyles';

export default function App() {
  const pathname = useLocation().pathname;

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
