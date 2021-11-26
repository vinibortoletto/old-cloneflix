import React from 'react';
import Button, { ButtonTypes } from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import * as S from './Info.styles';

export default function Info() {
  function showForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const btnElmt = e.target as HTMLButtonElement;
    const formElmt = btnElmt.nextSibling as HTMLFormElement;
    formElmt.classList.add('show');
  }

  function hideForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const btnElmt = e.target as HTMLButtonElement;
    const formElmt = btnElmt.parentElement as HTMLFormElement;
    formElmt.classList.remove('show');
  }

  return (
    <>
      <S.Container>
        <S.AccountInfo>
          <h1>Informações da conta</h1>
          <div className="email">
            <p>Email: ovinibortoletto@gmail.com</p>
            <button type="button" onClick={showForm}>
              Alterar email
            </button>

            <form>
              <Input id="email" type="email" />
              <button type="reset" onClick={hideForm}>
                Cancelar
              </button>
              <Button type={ButtonTypes.Submit}>Salvar</Button>
            </form>
          </div>
          <div className="password">
            <p>Senha: ******</p>
            <button type="button" onClick={showForm}>
              Alterar senha
            </button>

            <form>
              <Input id="password" type="password" />
              <button type="reset" onClick={hideForm}>
                Cancelar
              </button>
              <Button type={ButtonTypes.Submit}>Salvar</Button>
            </form>
          </div>
        </S.AccountInfo>
      </S.Container>
    </>
  );
}
