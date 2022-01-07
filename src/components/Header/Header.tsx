// Libs
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// Images
import Logo from './Logo/Logo';

// Components
import NavList from './NavList/NavList';
import NavIcons from './NavIcons/NavIcons';
import SelectInput from '../SelectInput/SelectInput';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
import * as S from './Header.styles';
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
