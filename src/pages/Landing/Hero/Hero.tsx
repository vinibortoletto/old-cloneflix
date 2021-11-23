import React from 'react';

// Images
import bgImg from '../../../images/misc/bg.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// Components
import Button, { ButtonTypes } from '../../../components/Button/Button';

// Styles
import * as S from './Hero.styles';
import Input from '../../../components/Input/Input';

export default function Hero() {
  return (
    <>
      <S.Container bgImg={bgImg}>
        <S.Title>Filmes, séries e muito mais. Sem limites.</S.Title>
        <S.Subtitle>Assista onde quiser. Cancele quando quiser.</S.Subtitle>

        <S.Form>
          <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </h3>

          <Input id="email" label="Email" type="email" />

          <Button type={ButtonTypes.Submit}>
            <span>Vamos lá</span>
            <MdOutlineKeyboardArrowRight />
          </Button>
        </S.Form>
      </S.Container>
    </>
  );
}
