import React, { FocusEvent, ChangeEvent, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useAuth } from '../../contexts/Auth';
import { useData } from '../../contexts/Data';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import * as S from './Input.styles';

type Props = {
  id: string;
  type: string;
};

export default function Input({ id, type }: Props) {
  const { data } = useData();
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
  } = useAuth();
  const { input } = data.components;
  const location = useLocation();

  function animateText(e: FocusEvent<HTMLInputElement>) {
    const labelElmt = e.target.previousSibling as HTMLLabelElement;

    if (e.target.value) {
      labelElmt.classList.add('active');
    } else {
      if (e.type === 'focus') labelElmt.classList.add('active');
      if (e.type === 'blur') labelElmt.classList.remove('active');
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const inputField = e.target;
    const inputText = inputField.value;

    if (type === 'email') {
      setEmail(inputText);
      validateEmail(inputText);
    } else {
      setPassword(inputText);
      validatePassword(inputText);
    }
  }

  function handleInputClassName(): string {
    if (type === 'email' && emailError) return 'error';
    if (type === 'password' && passwordError) return 'error';
    return '';
  }

  function handleLabelClassName(): string {
    if (type === 'email' && email) return 'active';
    if (type === 'password' && password) return 'active';
    return '';
  }

  return (
    <>
      <S.Container>
        <div>
          <S.Label htmlFor={id} className={handleLabelClassName()}>
            {type === 'email' ? input.email.label : input.password.label}
          </S.Label>
          <S.Input
            id={id}
            type={type}
            onFocus={animateText}
            onBlur={animateText}
            onChange={handleChange}
            value={type === 'email' ? email : password}
            className={handleInputClassName()}
          />
        </div>
        <ErrorMessage text={type === 'email' ? emailError : passwordError} />
      </S.Container>
    </>
  );
}
