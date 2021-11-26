import React from 'react';
import * as S from './YourAccount.styles';
import Title from './Title/Title';
import Info from './Info/Info';
import Profiles from './Profiles/Profiles';

export default function YourAccount() {
  return (
    <>
      <S.Container>
        <Title />
        <Info />
        <Profiles />
      </S.Container>
    </>
  );
}
