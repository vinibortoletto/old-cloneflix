import React from 'react';
import * as S from './Logo.styles';
import logo from '../../../images/misc/logo.png';

export default function Logo() {
  return (
    <>
      <S.Container src={logo} alt="cloneflix logo" />
    </>
  );
}
