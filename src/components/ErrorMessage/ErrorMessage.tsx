// Libs
import React from 'react';

// Styles
import * as S from './ErrorMessage.styles';

type Props = {
  text: string;
};

export default function ErrorMessage({ text }: Props) {
  return <S.Container>{text}</S.Container>;
}
