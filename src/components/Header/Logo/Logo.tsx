// Libs
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Images
import logo from '../../../images/misc/logo.png';

// Styles
import * as S from './Logo.styles';

export default function Logo() {
  const pathname = useLocation().pathname;

  return (
    <>
      <Link to="/">
        <S.Container pathname={pathname} src={logo} alt="cloneflix logo" />
      </Link>
    </>
  );
}
