// Libs
import React from 'react';

// Components
import DeleteAccountPopUp from './DeleteAccountPopUp/DeleteAccountPopUp';
import UpdateAccountPopUp from './UpdateAccountPopUp/UpdateAccountPopUp';

// Contexts
import { useAuth } from '../../../contexts/Auth';

// Styles
import * as S from './Info.styles';

export default function Info() {
  const { isDeleting, setIsDeleting, isUpdating, setIsUpdating, user } = useAuth();

  return (
    <S.Container>
      <S.Title>Informações da conta</S.Title>

      <S.UserInfo>
        <p>
          Email: <span>{user?.email}</span>
        </p>
        <p>
          Senha: <span>*********</span>
        </p>
      </S.UserInfo>

      <S.ButtonsContainer>
        <button className="delete-btn" type="button" onClick={() => setIsDeleting(true)}>
          Excluir conta
        </button>
        <button className="update-btn" type="button" onClick={() => setIsUpdating(true)}>
          Atualizar cadastro
        </button>
      </S.ButtonsContainer>

      {isDeleting && <DeleteAccountPopUp />}
      {isUpdating && <UpdateAccountPopUp />}
    </S.Container>
  );
}
