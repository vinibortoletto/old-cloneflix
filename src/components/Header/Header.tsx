import React from 'react';
import { useLocation } from 'react-router';

// Styles
import * as S from './Header.styles';

// Components
import Logo from './Logo/Logo';
import NavList from './NavList/NavList';
import NavIcons from './NavIcons/NavIcons';
import SelectInput from '../SelectInput/SelectInput';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/Data';
import { Button } from '../Button/Button.styles';

export default function Header() {
  const pathname = useLocation().pathname;
  const { lang } = useData();

  return (
    <>
      <S.Container pathname={pathname}>
        <Logo />

        {pathname === '/browse' && (
          <>
            <NavList />
            <NavIcons />
          </>
        )}

        {pathname === '/your-account' && <NavIcons />}

        <S.Wrapper pathname={pathname}>
          {pathname === '/' && <SelectInput />}

          {(pathname === '/' || pathname === '/signup') && (
            <Button type="button">
              <Link to="/login">{lang === 'br' ? 'Entrar' : 'Sign in'}</Link>
            </Button>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
