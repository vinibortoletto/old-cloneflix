import React from 'react';
import { BsCalendarDay } from 'react-icons/bs';
import * as S from './Title.styles';

export default function Title() {
  return (
    <>
      <S.Container>
        <h1>Conta</h1>
        <div>
          <BsCalendarDay />
          <p>Assinante desde Agosto 2016</p>
        </div>
      </S.Container>
    </>
  );
}
