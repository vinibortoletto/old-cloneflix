import React from 'react';
import Button, { ButtonTypes } from '../../../../components/Button/Button';
import { useAuth } from '../../../../contexts/Auth';
// Styles
import * as S from './DeleteAccountPopUp.styles';

export default function DeleteAccountPopUp() {
  const { setIsDeleting } = useAuth();

  return (
    <>
      <S.Container>
        <S.Title>Tem certeza de que quer excluir sua conta?</S.Title>
        <S.Subtitle>Essa ação não poderá ser desfeita!</S.Subtitle>

        <S.ButtonsContainer>
          <Button type={ButtonTypes.Button}>Excluir conta</Button>
          <Button
            className="grey"
            type={ButtonTypes.Button}
            onClick={() => setIsDeleting(false)}
          >
            Cancelar
          </Button>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
}
