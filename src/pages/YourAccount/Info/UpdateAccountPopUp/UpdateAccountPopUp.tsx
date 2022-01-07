// Libs
import React, { KeyboardEvent } from 'react';
import { updateEmail, updatePassword } from 'firebase/auth';

// Componetns
import Button, { ButtonTypes } from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Spinner from '../../../../components/Spinner/Spinner';

// Contexts
import { useAuth } from '../../../../contexts/Auth';

// Styles
import * as S from './UpdateAccountPopUp.styles';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';

export default function UpdateAccountPopUp() {
  const {
    email,
    setEmail,
    setEmailError,
    password,
    setPassword,
    setPasswordError,
    setIsUpdating,
    user,
    isLoading,
    setIsLoading,
    checkAuthErrors,
    authErrorMessage,
    setAuthErrorMessage,
    validateEmail,
    validatePassword,
  } = useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);

    if (user) {
      if (email !== '') {
        setIsLoading(true);
        updateEmail(user, email)
          .then(() => {
            setIsLoading(false);
            setIsUpdating(false);
            setEmail('');
          })
          .catch((error) => {
            setIsLoading(false);
            checkAuthErrors(error.code);
          });
      }

      if (password !== '') {
        setIsLoading(true);
        updatePassword(user, password)
          .then(() => {
            setIsLoading(false);
            setIsUpdating(false);
            setPassword('');
          })
          .catch((error) => {
            setIsLoading(false);
            checkAuthErrors(error.code);
          });
      }
    }
  }

  function handleClosePopup() {
    setIsUpdating(false);
    setAuthErrorMessage('');
    setEmail('');
    setEmailError('');
    setPassword('');
    setPasswordError('');
  }

  return (
    <>
      <S.Container id="update-account-popup">
        <S.Title>Atualização de cadastro</S.Title>
        <S.Subtitle>Deixe em branco os campos que não quiser alterar.</S.Subtitle>

        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit}>
            <Input id="email" type="email" />
            <Input id="password" type="password" />

            <S.ButtonsContainer>
              <Button type={ButtonTypes.Submit}>Salvar</Button>
              <Button className="grey" type={ButtonTypes.Button} onClick={handleClosePopup}>
                Cancelar
              </Button>
            </S.ButtonsContainer>

            <ErrorMessage text={authErrorMessage} />
          </form>
        )}
      </S.Container>
    </>
  );
}
