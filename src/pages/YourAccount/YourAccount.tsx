import React from 'react';
import { useAuth } from '../../contexts/Auth';
import useGetWidth from '../../helpers/hooks/useGetWidth';
import Info from './Info/Info';
import Profiles from './Profiles/Profiles';
import Title from './Title/Title';
import * as S from './YourAccount.styles';

export default function YourAccount() {
  const { isDeleting, isUpdating } = useAuth();
  const width = useGetWidth();

  return (
    <>
      <S.Container>
        {(isDeleting || isUpdating) && <S.Shadow />}
        <Title />
        <S.Line />
        <S.Wrapper>
          <Info />
          {width < 768 && <S.Line />}
          <Profiles />
        </S.Wrapper>
      </S.Container>
    </>
  );
}
