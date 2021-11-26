import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Title from '../../components/Title/Title';
import * as S from './Login.styles';

import { useData } from '../../contexts/Data';
import BgImg from '../../components/BgImg/BgImg';
import { Link } from 'react-router-dom';

export default function Login() {
  const { data } = useData();
  const { noAcc, signUp, title } = data.pages.login;

  return (
    <>
      <S.Container>
        <S.Wrapper className="wrapper">
          <BgImg />
          <Title text={title} />

          <RegistrationForm />

          <S.Signup>
            {noAcc}
            <Link to="/signup">{signUp}</Link>
          </S.Signup>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
