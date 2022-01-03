import React, { FocusEvent, ChangeEvent, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useAuth } from '../../contexts/Auth';
import { useData } from '../../contexts/Data';
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
    setEmailError,
    passwordError,
    setPasswordError,
  } = useAuth();
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

  function handleError(text: string, field: EventTarget & HTMLInputElement) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Email validation
    if (type === 'email') {
      if (pathname === '/your-account') {
        // Updating account
        if (text !== '' && !emailRegex.test(text)) {
          field.classList.add('error');
          return setEmailError(input.email.error.invalid);
        }
      } else {
        // Login and Signup
        if (text === '') {
          field.classList.add('error');
          return setEmailError(input.email.error.empty);
        }
        if (!emailRegex.test(text)) {
          field.classList.add('error');
          return setEmailError(input.email.error.invalid);
        }
      }
      setEmailError('');
      field.classList.remove('error');
    }

    // Password validation
    if (type === 'password') {
      if (pathname === '/your-account') {
        // Updating account
        if (text !== '' && text.length < 6) {
          field.classList.add('error');
          return setPasswordError(input.password.error.invalid);
        }
      } else {
        // Login and Signup
        if (text === '') {
          field.classList.add('error');
          return setPasswordError(input.password.error.empty);
        }
        if (text.length < 6) {
          field.classList.add('error');
          return setPasswordError(input.password.error.invalid);
        }
      }

      setPasswordError('');
      field.classList.remove('error');
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target;
    const text = field.value;

    if (type === 'email') setEmail(text);
    else setPassword(text);

    handleError(text, field);
  }

  useEffect(() => {
    // Clean fields when route changes
    setEmail('');
    setEmailError('');
    setPassword('');
    setPasswordError('');
  }, [pathname]);

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
            value={type === 'email' ? email : password}
          />
        </div>
        <S.Error>{type === 'email' ? emailError : passwordError}</S.Error>
      </S.Container>
    </>
  );
}
