import React from 'react';
import Button, { ButtonTypes } from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import * as S from './Info.styles';
import UpdateInfo from './UpdateInfo/UpdateInfo';
import UpdateInfoForm from './UpdateInfoForm/UpdateInfoForm';

export default function Info() {
  function showForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const btnElmt = e.target as HTMLButtonElement;
    const formElmt = btnElmt.parentElement?.nextSibling as HTMLFormElement;
    formElmt.classList.add('show');
  }

  function hideForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const btnElmt = e.target as HTMLButtonElement;
    const formElmt = btnElmt.parentElement as HTMLFormElement;
    formElmt.classList.remove('show');
  }

  return (
    <S.Container>
      <section>
        <S.AccountTitle>Informações da conta</S.AccountTitle>
        <S.AccountEmail>
          <UpdateInfo
            infoTitle="Email"
            infoContent="ovinibortoletto@gmail.com"
            buttonText="Alterar email"
            showForm={showForm}
          />
          <UpdateInfoForm hideForm={hideForm} id="email" />
        </S.AccountEmail>

        <S.AccountPassword>
          <UpdateInfo
            infoTitle="Senha"
            infoContent="******"
            buttonText="Alterar senha"
            showForm={showForm}
          />

          <UpdateInfoForm hideForm={hideForm} id="password" />
        </S.AccountPassword>
      </section>
    </S.Container>
  );
}
