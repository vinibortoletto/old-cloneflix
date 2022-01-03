import React from 'react';
import { BsCalendarDay } from 'react-icons/bs';
import { default as ComponentTitle } from '../../../components/Title/Title';
import * as S from './Title.styles';

export default function Title() {
  return (
    <>
      <S.Container>
        <ComponentTitle text="Conta" />
        <div>
          <BsCalendarDay />
          <p>Assinante desde Agosto 2016</p>
        </div>
      </S.Container>
    </>
  );
}
