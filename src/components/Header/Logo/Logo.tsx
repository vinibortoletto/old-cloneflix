import React from 'react';
import * as S from './Logo.styles';
import logo from '../../../images/misc/logo.png';
import { Link, useLocation } from 'react-router-dom';

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
