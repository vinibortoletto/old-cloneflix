import React, { FormEvent } from 'react';
import { useLocation } from 'react-router';
import { useData } from '../../contexts/Data';
import Button, { ButtonTypes } from '../Button/Button';
import Input from '../Input/Input';
import * as S from './RegistrationForm.styles';

export type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function RegistrationForm({ handleSubmit }: Props) {
  const pathname = useLocation().pathname;
  const { data } = useData();
  const { registrationForm } = data.components;

  return (
    <>
      <S.Container onSubmit={handleSubmit}>
        <Input id="email" type="email" />
        <Input id="password" type="password" />
        <Button type={ButtonTypes.Submit}>
          {pathname === '/login' ? registrationForm.login : registrationForm.signup}
        </Button>
      </S.Container>
    </>
  );
}
