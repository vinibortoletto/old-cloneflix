// Libs
import React from 'react';

// Images
import { BsCalendarDay } from 'react-icons/bs';

// Components
import { default as ComponentTitle } from '../../../components/Title/Title';

// Styles
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
