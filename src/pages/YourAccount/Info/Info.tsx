import React from 'react';
import * as S from './Info.styles';
import DeleteAccountPopUp from './DeleteAccountPopUp/DeleteAccountPopUp';
import { useAuth } from '../../../contexts/Auth';
import UpdateAccountPopUp from './UpdateAccountPopUp/UpdateAccountPopUp';

export default function Info() {
  const { isDeleting, setIsDeleting, isUpdating, setIsUpdating } = useAuth();

  return (
    <S.Container>
      <S.Title>Informações da conta</S.Title>

      <S.UserInfo>
        <p>
          Email: <span>ovinibortoletto@gmail.com</span>
        </p>
        <p>
          Senha: <span>*********</span>
        </p>
      </S.UserInfo>

      <S.ButtonsContainer>
        <button
          className="delete-btn"
          type="button"
          onClick={() => setIsDeleting(true)}
        >
          Excluir conta
        </button>
        <button
          className="update-btn"
          type="button"
          onClick={() => setIsUpdating(true)}
        >
          Atualizar cadastro
        </button>
      </S.ButtonsContainer>

      {isDeleting && <DeleteAccountPopUp />}
      {isUpdating && <UpdateAccountPopUp />}
    </S.Container>
  );
}
