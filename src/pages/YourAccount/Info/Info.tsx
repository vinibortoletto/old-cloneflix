import React, { useEffect } from 'react';
import * as S from './Info.styles';
import DeleteAccountPopUp from './DeleteAccountPopUp/DeleteAccountPopUp';
import { useAuth } from '../../../contexts/Auth';
import UpdateAccountPopUp from './UpdateAccountPopUp/UpdateAccountPopUp';

export default function Info() {
  const { isDeleting, setIsDeleting, isUpdating, setIsUpdating, user } = useAuth();

  useEffect(() => {
    function handleClosePopup(e: MouseEvent) {
      const updatePopupElmt = document.getElementById('update-account-popup');
      const deletePopupElmt = document.getElementById('delete-account-popup');

      if (isUpdating && !updatePopupElmt?.contains(e.target as Node)) {
        document.removeEventListener('click', handleClosePopup);
        setIsUpdating(false);
      }
      if (isDeleting && !deletePopupElmt?.contains(e.target as Node)) {
        document.removeEventListener('click', handleClosePopup);
        setIsDeleting(false);
      }
    }

    if (isUpdating || isDeleting) {
      document.addEventListener('click', handleClosePopup);
    }
  }, [isUpdating, isDeleting]);

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
