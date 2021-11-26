/* eslint-disable indent */
import React from 'react';
import { useLocation } from 'react-router';
import { useData } from '../../contexts/Data';
import Button, { ButtonTypes } from '../Button/Button';
import Input from '../Input/Input';
import * as S from './RegistrationForm.styles';

export default function RegistrationForm() {
  const { lang, data } = useData();
  const pathname = useLocation().pathname;
  const { login, signup } = data.components.registrationForm;

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
          {pathname === '/login' ? login : signup}
        </Button>
      </S.Container>
    </>
  );
}
