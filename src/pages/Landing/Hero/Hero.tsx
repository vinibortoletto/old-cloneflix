import React from 'react';
// Images
import bgImgSmall from '../../../images/misc/bg-small.jpg';
import bgImgMedium from '../../../images/misc/bg-medium.jpg';
import bgImgLarge from '../../../images/misc/bg-large.jpg';
// Styles
import * as S from './Hero.styles';
import Form from './Form/Form';
import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';

export default function Hero() {
  return (
    <>
      <S.Container>
        <S.BgImg>
          <div className="shadow" />
          <img
            src={bgImgSmall}
            srcSet={`${bgImgSmall} 1000vw, ${bgImgMedium} 1500vw, ${bgImgLarge} 1800vw`}
            alt="um display de vários posters de filmes"
          />
        </S.BgImg>

        <Title text="Filmes, séries e muito mais. Sem limites." />
        <Subtitle text="Assista onde quiser. Cancele quando quiser." />

        <Form />
      </S.Container>
    </>
  );
}
