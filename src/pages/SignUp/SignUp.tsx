import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import * as S from './SignUp.styles';

export default function SignUp() {
  return (
    <>
      <S.Container>
        <S.Title>Crie um senha para iniciar sua assinatura</S.Title>

        <S.Subtitle>
          Faltam só mais alguns passos! Nós também detestamos formulários.
        </S.Subtitle>

        <RegistrationForm />
      </S.Container>
    </>
  );
}
