// Libs
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Contexts
import { useData } from '../../../contexts/Data';

// Components
import { Button } from '../../Button/Button.styles';
import Logo from '../../Logo/Logo';

// Styles
import * as S from './SimpleHeader.styles';

export default function SimpleHeader() {
  const { lang } = useData();
  const pathname = useLocation().pathname;

  return (
    <>
      <S.Container pathname={pathname}>
        <Logo />

        {/* Show Sign In button on Landing and Sign Up page */}
        {(pathname === '/' || pathname === '/signup') && (
          <Button type="button">
            <Link to="/login">{lang === 'br' ? 'Entrar' : 'Sign in'}</Link>
          </Button>
        )}
      </S.Container>
    </>
  );
}
