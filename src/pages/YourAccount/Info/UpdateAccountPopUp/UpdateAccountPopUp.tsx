import React, { useState } from 'react';
import Button, { ButtonTypes } from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { useAuth } from '../../../../contexts/Auth';
import { useData } from '../../../../contexts/Data';
// Styles
import * as S from './UpdateAccountPopUp.styles';

export default function UpdateAccountPopUp() {
  const { email, password, setIsUpdating } = useAuth();
  const { data } = useData();
  const { input } = data.components;
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    e.preventDefault();

    if (email === '' || password === '') {
      return setErrorMessage('Preencha um dos campos para atualiza-lo.');
    }

    setErrorMessage('');
  }

  return (
    <>
      <S.Container>
        <S.Title>Atualização de cadastro</S.Title>
        <S.Subtitle>
          Deixe em branco os campos que não quiser alterar.
        </S.Subtitle>

        <form onSubmit={handleSubmit}>
          <Input id={input.email.label} type="email" />
          <Input id={input.password.label} type="password" />

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

          <p>{errorMessage}</p>
        </form>
      </S.Container>
    </>
  );
}
