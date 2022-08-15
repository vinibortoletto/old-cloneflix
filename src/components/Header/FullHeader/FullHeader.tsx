// Libs
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Logo from '../../Logo/Logo';
import MobileMenu from './MobileMenu/MobileMenu';
import NavList from './NavList/NavList';
import NavIcons from './NavIcons/NavIcons';

// Styles
import * as S from './FullHeader.styles';

export default function FullHeader() {
  const pathname = useLocation().pathname;

  useEffect(() => {
    function handleHeaderTransparency() {
      const header = document.querySelector('header') as HTMLElement;

      if (window.scrollY > 0) header.classList.add('solid');
      else header.classList.remove('solid');
    }

    window.addEventListener('scroll', handleHeaderTransparency);
    return () => window.removeEventListener('scroll', handleHeaderTransparency);
  }, []);

  return (
    <>
      <S.Container pathname={pathname}>
        <S.ContentWrapper>
          <S.LeftContentWrapper>
            {pathname === '/browse' && <MobileMenu />}
            <Logo />
            {pathname === '/browse' && <NavList />}
          </S.LeftContentWrapper>

          <NavIcons />
        </S.ContentWrapper>
      </S.Container>
    </>
  );
}
