// Libs
import React from 'react';
import { useAuth } from '../../contexts/Auth';

// Components
import Info from './Info/Info';
import Title from './Title/Title';

// Styles
import * as S from './YourAccount.styles';

export default function YourAccount() {
  const { isDeleting, isUpdating } = useAuth();

  return (
    <>
      <S.Container>
        {(isDeleting || isUpdating) && <S.Shadow />}
        <Title />
        <S.Line />
        <Info />
      </S.Container>
    </>
  );
}
