import React from 'react';
import { useLocation } from 'react-router';
import { AppRoutes } from './routes';

// Styles
import { GlobalStyles } from './helpers/styles/GlobalStyles';
import Header from './components/Header/Header';

export default function App() {
  const pathname = useLocation().pathname;

  return (
    <>
      <GlobalStyles pathname={pathname} />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  );
}
