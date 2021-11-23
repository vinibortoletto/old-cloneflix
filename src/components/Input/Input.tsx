import React, { FocusEvent, ChangeEvent, useState } from 'react';
import * as S from './Input.styles';

type Props = {
  id: string;
  label: string;
  type: string;
};

export default function Input({ id, label, type }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function animateText(e: FocusEvent<HTMLInputElement>) {
    const labelElmt = document.getElementById('label') as HTMLLabelElement;

    if (e.target.value) {
      labelElmt.classList.add('active');
    } else {
      if (e.type === 'focus') labelElmt.classList.add('active');
      if (e.type === 'blur') labelElmt.classList.remove('active');
    }
  }

  function handleError(text: string) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (text === '') return setError('O email é obrigatório.');
    if (!emailRegex.test(text)) return setError('Insira um email válido.');

    setError('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    handleError(e.target.value);
  }

  return (
    <>
      <S.Container>
        <div>
          <S.Label htmlFor={id} id="label">
            {label}
          </S.Label>
          <S.Input
            id={id}
            type={type}
            onFocus={animateText}
            onBlur={animateText}
            onChange={handleChange}
            value={email}
            error={error !== '' && true}
          />
        </div>
        <S.Error>{error}</S.Error>
      </S.Container>
    </>
  );
}
