import React from 'react';
import Button, { ButtonTypes } from '../Button/Button';
import Input from '../Input/Input';
import * as S from './RegistrationForm.styles';

export default function RegistrationForm() {
  return (
    <>
      <S.Container>
        <Input id="email" label="Email" type="email" />
        <Input id="password" label="Password" type="password" />
        <Button type={ButtonTypes.Submit}>Cadastrar</Button>
      </S.Container>
    </>
  );
}
