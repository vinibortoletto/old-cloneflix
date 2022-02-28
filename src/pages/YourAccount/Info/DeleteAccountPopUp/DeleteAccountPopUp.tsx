// Libs
import React from 'react';
import { deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Components
import { Button } from '../../../../components/Button/Button.styles';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../../../components/Spinner/Spinner';

// Contexts
import { useAuth } from '../../../../contexts/Auth';
import { useData } from '../../../../contexts/Data';

// Styles
import * as S from './DeleteAccountPopUp.styles';

export default function DeleteAccountPopUp() {
  const { setIsDeleting, user, isLoading, setIsLoading, checkAuthErrors, authErrorMessage } =
    useAuth();
  const { data } = useData();
  const { yourAccount } = data.pages;
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
        <S.Title>{yourAccount.deleteAccount.title}</S.Title>
        <S.Subtitle>{yourAccount.deleteAccount.subtitle}</S.Subtitle>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ErrorMessage text={authErrorMessage} />
            <S.ButtonsContainer>
              <Button type="button" onClick={deleteAccount}>
                {yourAccount.deleteAccount.deleteButton}
              </Button>
              <Button className="grey" type="button" onClick={() => setIsDeleting(false)}>
                {yourAccount.deleteAccount.cancelButton}
              </Button>
            </S.ButtonsContainer>
          </>
        )}
      </S.Container>
    </>
  );
}
