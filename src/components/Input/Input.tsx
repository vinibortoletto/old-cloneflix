import React, { FocusEvent, ChangeEvent, useState } from 'react';
import { useLocation } from 'react-router';
import { useData } from '../../contexts/Data';
import * as S from './Input.styles';

type Props = {
  id: string;
  type: string;
};

export default function Input({ id, type }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { data } = useData();
  const { input } = data.components;
  const pathname = useLocation().pathname;

  function animateText(e: FocusEvent<HTMLInputElement>) {
    const labelElmt = e.target.previousSibling as HTMLLabelElement;

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

    // Email validation
    if (type === 'email') {
      if (text === '') return setError(input.email.error.empty);
      if (!emailRegex.test(text)) return setError(input.email.error.invalid);
    }

    // Password validation
    if (type === 'password') {
      if (text === '') return setError(input.password.error.empty);
      if (text.length < 6) return setError(input.password.error.invalid);
    }

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
          <S.Label htmlFor={id}>
            {type === 'email' ? input.email.label : input.password.label}
          </S.Label>
          <S.Input
            id={id}
            type={type}
            onFocus={animateText}
            onBlur={animateText}
            onChange={handleChange}
            value={email}
            error={error !== '' && true}
            pathname={pathname}
          />
        </div>
        <S.Error pathname={pathname}>{error}</S.Error>
      </S.Container>
    </>
  );
}
