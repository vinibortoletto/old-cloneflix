// Libs
import React from 'react';
import { useLocation } from 'react-router-dom';
import SimpleHeader from './SimpleHeader/SimpleHeader';
import FullHeader from './FullHeader/FullHeader';

export default function Header() {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname === '/browse' || pathname === '/your-account' ? <FullHeader /> : <SimpleHeader />}
    </>
  );
}
