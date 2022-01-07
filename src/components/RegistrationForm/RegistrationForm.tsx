// Libs
import React, { FormEvent } from 'react';
import { useLocation } from 'react-router';

// Components
import Input from '../Input/Input';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
import * as S from './RegistrationForm.styles';
import { Button } from '../Button/Button.styles';

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
        <Button type="submit">
          {pathname === '/login' ? registrationForm.login : registrationForm.signup}
        </Button>
      </S.Container>
    </>
  );
}
