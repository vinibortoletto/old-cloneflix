// Libs
import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Search from './Search/Search';
import Profile from './Profile/Profile';

// Styles
import * as S from './NavIcons.styles';

export default function NavIcons() {
  const pathname = useLocation().pathname;

  return (
    <>
      <S.Container>
        {pathname === '/browse' && <Search />}
        <Profile />
      </S.Container>
    </>
  );
}
