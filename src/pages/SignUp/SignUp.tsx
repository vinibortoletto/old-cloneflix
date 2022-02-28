// Libs
import React from 'react';
import { auth } from '../../libs/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

// Components
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../components/Title/Title';

// Contexts
import { useAuth } from '../../contexts/Auth';
import { useData } from '../../contexts/Data';

// Styles
import * as S from './SignUp.styles';

export default function SignUp() {
  const navigate = useNavigate();
  const { data } = useData();
  const { subtitle, title, alreadyHaveAcc, login } = data.pages.signup;

  const {
    email,
    password,
    validateEmail,
    validatePassword,
    isError,
    checkAuthErrors,
    setIsLoading,
    isLoading,
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
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setIsLoading(false);
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
          <Title text={title} />
          <S.Subtitle>{subtitle}</S.Subtitle>
          <RegistrationForm handleSubmit={handleSubmit} />
          <S.Login>
            {alreadyHaveAcc}
            <Link to="/login">{login}</Link>
          </S.Login>
        </S.Container>
      )}
    </>
  );
}
