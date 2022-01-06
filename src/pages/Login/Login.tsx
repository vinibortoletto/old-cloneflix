import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Title from '../../components/Title/Title';
import * as S from './Login.styles';

import { useData } from '../../contexts/Data';
import BgImg from '../../components/BgImg/BgImg';

import { useAuth } from '../../contexts/Auth';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';
import { auth } from '../../libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const { data } = useData();
  const { noAcc, signUp, title } = data.pages.login;
  const {
    email,
    password,
    isError,
    setUser,
    validateEmail,
    validatePassword,
    checkAuthErrors,
    isLoading,
    setIsLoading,
    authErrorMessage,
  } = useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      validateEmail(email);
      validatePassword(password);
      return;
    }

    if (!isError) {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          navigate('/browse');
        })
        .catch((error) => {
          setIsLoading(false);
          checkAuthErrors(error.code);
        });
    }
  }

  return (
    <>
      {isLoading ? (
        <S.SpinnerContainer>
          <Spinner />
        </S.SpinnerContainer>
      ) : (
        <S.Container>
          <S.Wrapper className="wrapper">
            <BgImg />
            <Title text={title} />
            <RegistrationForm handleSubmit={handleSubmit} />
            <ErrorMessage text={authErrorMessage} />
            <S.Signup>
              {noAcc}
              <Link to="/signup">{signUp}</Link>
            </S.Signup>
          </S.Wrapper>
        </S.Container>
      )}
    </>
  );
}
