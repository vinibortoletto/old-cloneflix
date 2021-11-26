import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Button, { ButtonTypes } from '../Button/Button';
import Input from '../Input/Input';
import * as S from './EmailForm.styles';

export default function EmailForm() {
  return (
    <>
      <S.Container>
        <S.Title>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </S.Title>

        <S.Wrapper className="wrapper">
          <Input id="email" type="email" />

          <Button type={ButtonTypes.Submit}>
            <span>Vamos lá</span>
            <MdOutlineKeyboardArrowRight />
          </Button>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
