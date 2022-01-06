import React from 'react';
import { updateEmail } from 'firebase/auth';

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
    password,
    setIsUpdating,
    user,
    setIsLoading,
    isLoading,
    checkAuthErrors,
    authErrorMessage,
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
          })
          .catch((error) => {
            setIsLoading(false);
            checkAuthErrors(error.code);
          });
      }
    }
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
              <Button
                className="grey"
                type={ButtonTypes.Button}
                onClick={() => setIsUpdating(false)}
              >
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
