import React from 'react';
import { useData } from '../../contexts/Data';
import Button, { ButtonTypes } from '../Button/Button';
import Input from '../Input/Input';
import * as S from './RegistrationForm.styles';

export default function RegistrationForm() {
  const { lang } = useData();

  return (
    <>
      <S.Container>
        <Input id="email" label="Email" type="email" />
        <Input
          id="password"
          label={lang === 'br' ? 'Senha' : 'Password'}
          type="password"
        />
        <Button type={ButtonTypes.Submit}>
          {lang === 'br' ? 'Cadastrar' : 'Sign up'}
        </Button>
      </S.Container>
    </>
  );
}
