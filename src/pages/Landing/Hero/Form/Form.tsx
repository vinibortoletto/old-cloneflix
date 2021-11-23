import React from 'react';
// Images
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
// Styles
import * as S from './Form.styles';
// Components
import Input from '../../../../components/Input/Input';
import Button, { ButtonTypes } from '../../../../components/Button/Button';

export default function Form() {
  return (
    <>
      <S.Container>
        <S.Title>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </S.Title>

        <S.Wrapper className="wrapper">
          <Input id="email" label="Email" type="email" />
          <Button type={ButtonTypes.Submit}>
            <span>Vamos lá</span>
            <MdOutlineKeyboardArrowRight />
          </Button>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
