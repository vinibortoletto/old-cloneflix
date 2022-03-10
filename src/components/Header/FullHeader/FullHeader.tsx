// Libs
import React from 'react';
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

  return (
    <>
      <S.Container>
        <S.Wrapper>
          {pathname === '/browse' && <MobileMenu />}
          <Logo />
          {pathname === '/browse' && <NavList />}
        </S.Wrapper>

        <NavIcons />
      </S.Container>
    </>
  );
}
