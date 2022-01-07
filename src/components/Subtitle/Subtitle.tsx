// Libs
import React from 'react';

// Styles
import * as S from './Subtitle.styles';

type Props = { text: string };

export default function Subtitle({ text }: Props) {
  return <S.Container>{text}</S.Container>;
}
