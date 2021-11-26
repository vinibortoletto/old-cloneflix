import React from 'react';
import { FcCalendar } from 'react-icons/fc';
import * as S from './Title.styles';

export default function Title() {
  return (
    <>
      <S.Container>
        <h1>Conta</h1>
        <div>
          <FcCalendar />
          <p>Assinante desde Agosto 2016</p>
        </div>
      </S.Container>
    </>
  );
}
