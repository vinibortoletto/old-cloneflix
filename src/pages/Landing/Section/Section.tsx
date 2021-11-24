import React from 'react';
// Images
import sectionImg1 from '../../../images/misc/section-1.jpg';
// Components
import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';
// Styles
import * as S from './Section.styles';

export default function Section() {
  return (
    <>
      <S.Container>
        <S.Text>
          <Title text="Aproveite na TV." />
          <Subtitle
            text="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos."
          />
        </S.Text>

        <S.Image>
          <img src={sectionImg1} alt="" />
        </S.Image>
      </S.Container>
    </>
  );
}
