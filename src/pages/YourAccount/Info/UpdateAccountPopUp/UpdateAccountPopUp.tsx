// Libs
import React from 'react';
import { updateEmail, updatePassword } from 'firebase/auth';

// Componetns
import { Button } from '../../../../components/Button/Button.styles';
import Input from '../../../../components/Input/Input';
import Spinner from '../../../../components/Spinner/Spinner';

// Contexts
import { useAuth } from '../../../../contexts/Auth';
import { useData } from '../../../../contexts/Data';

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
  const { data } = useData();
  const { updateAccount } = data.pages.yourAccount;

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
        <S.Title>{updateAccount.title}</S.Title>
        <S.Subtitle>{updateAccount.subtitle}</S.Subtitle>

        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit}>
            <Input id="email" type="email" />
            <Input id="password" type="password" />

            <S.ButtonsContainer>
              <Button type="submit">{updateAccount.updateButton}</Button>
              <Button className="grey" type="button" onClick={handleClosePopup}>
                {updateAccount.cancelButton}
              </Button>
            </S.ButtonsContainer>

            <ErrorMessage text={authErrorMessage} />
          </form>
        )}
      </S.Container>
    </>
  );
}
