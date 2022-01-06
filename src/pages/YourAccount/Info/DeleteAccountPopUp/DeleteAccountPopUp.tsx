import { deleteUser } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonTypes } from '../../../../components/Button/Button';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../../../components/Spinner/Spinner';
import { useAuth } from '../../../../contexts/Auth';
// Styles
import * as S from './DeleteAccountPopUp.styles';

export default function DeleteAccountPopUp() {
  const { setIsDeleting, user, isLoading, setIsLoading, checkAuthErrors, authErrorMessage } =
    useAuth();
  const navigate = useNavigate();

  function deleteAccount() {
    if (user) {
      setIsLoading(true);
      deleteUser(user)
        .then(() => {
          setIsDeleting(false);
          setIsLoading(false);
          navigate('/signup');
        })
        .catch((error) => {
          setIsLoading(false);
          checkAuthErrors(error.code);
        });
    }
  }

  return (
    <>
      <S.Container id="delete-account-popup">
        <S.Title>Tem certeza de que quer excluir sua conta?</S.Title>
        <S.Subtitle>Essa ação não poderá ser desfeita!</S.Subtitle>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ErrorMessage text={authErrorMessage} />
            <S.ButtonsContainer>
              <Button type={ButtonTypes.Button} onClick={deleteAccount}>
                Excluir conta
              </Button>
              <Button
                className="grey"
                type={ButtonTypes.Button}
                onClick={() => setIsDeleting(false)}
              >
                Cancelar
              </Button>
            </S.ButtonsContainer>
          </>
        )}
      </S.Container>
    </>
  );
}
