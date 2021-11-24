import React from 'react';
import * as S from './Logo.styles';
import logo from '../../../images/misc/logo.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <>
      <Link to="/">
        <S.Container src={logo} alt="cloneflix logo" />
      </Link>
    </>
  );
}
