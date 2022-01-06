import React from 'react';
// Styles
import * as S from './Spinner.styles';
// Images
import SpinnerImg from '../../images/misc/spinner.png';

export default function Spinner() {
  return (
    <S.Container>
      <img src={SpinnerImg} alt="spinner" />
    </S.Container>
  );
}
