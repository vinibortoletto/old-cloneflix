import React from 'react';

// Components
import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';
import EmailForm from '../../../components/EmailForm/EmailForm';

// Styles
import * as S from './Hero.styles';
import { useData } from '../../../contexts/Data';
import BgImg from '../../../components/BgImg/BgImg';

export default function Hero() {
  const { data } = useData();
  const { title, subtitle } = data.pages.landing.hero;

  return (
    <>
      <S.Container>
        <BgImg />

        <Title text={title} />
        <Subtitle text={subtitle} />

        <EmailForm />
      </S.Container>
    </>
  );
}
