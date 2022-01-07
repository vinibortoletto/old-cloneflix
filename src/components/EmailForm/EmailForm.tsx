// Libs
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// Contexts
import { useAuth } from '../../contexts/Auth';
import { useData } from '../../contexts/Data';

// Components
import Input from '../Input/Input';
import { Button } from '../Button/Button.styles';

// Styles
import * as S from './EmailForm.styles';

export default function EmailForm() {
  const navigate = useNavigate();
  const { email } = useAuth();
  const { data } = useData();
  const { title, button } = data.components.formEmail;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email) navigate('/signup');
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Title>{title}</S.Title>

      <S.Wrapper>
        <Input id="email" type="email" />
        <Button type="submit">
          {button}
          <MdOutlineKeyboardArrowRight />
        </Button>
      </S.Wrapper>
    </S.Container>
  );
}
