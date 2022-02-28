// Libs
import React from 'react';

// Components
import DeleteAccountPopUp from './DeleteAccountPopUp/DeleteAccountPopUp';
import UpdateAccountPopUp from './UpdateAccountPopUp/UpdateAccountPopUp';

// Contexts
import { useAuth } from '../../../contexts/Auth';

// Styles
import * as S from './Info.styles';
import { useData } from '../../../contexts/Data';

export default function Info() {
  const { isDeleting, setIsDeleting, isUpdating, setIsUpdating, user } = useAuth();
  const { data } = useData();
  const { info } = data.pages.yourAccount;

  return (
    <S.Container>
      <S.Title>{info.title}</S.Title>

      <S.UserInfo>
        <p>
          Email: <span>{user?.email}</span>
        </p>
        <p>
          {info.password}: <span>*********</span>
        </p>
      </S.UserInfo>

      <S.ButtonsContainer>
        <button className="delete-btn" type="button" onClick={() => setIsDeleting(true)}>
          {info.deleteAccount}
        </button>
        <button className="update-btn" type="button" onClick={() => setIsUpdating(true)}>
          {info.updateAccount}
        </button>
      </S.ButtonsContainer>

      {isDeleting && <DeleteAccountPopUp />}
      {isUpdating && <UpdateAccountPopUp />}
    </S.Container>
  );
}
