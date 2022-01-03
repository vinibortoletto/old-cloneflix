import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Title from '../../components/Title/Title';
import { useData } from '../../contexts/Data';
import * as S from './SignUp.styles';

export default function SignUp() {
  const { data } = useData();
  const { subtitle, title } = data.pages.signup;

  return (
    <>
      <S.Container>
        {/* <S.Title>{title}</S.Title> */}
        <Title text={title} />
        <S.Subtitle>{subtitle}</S.Subtitle>
        <RegistrationForm />
      </S.Container>
    </>
  );
}
