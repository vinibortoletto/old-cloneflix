// Libs
import React from 'react';

// Images
import SpinnerImg from '../../images/misc/spinner.png';

// Styles
import * as S from './Spinner.styles';

export default function Spinner() {
  return (
    <S.Container>
      <img src={SpinnerImg} alt="spinner" />
    </S.Container>
  );
}
