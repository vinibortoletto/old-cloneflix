import React from 'react';
import { useData } from '../../contexts/Data';
import * as S from './Footer.styles';

export default function Footer() {
  const { data } = useData();
  const { copyright, navList, title } = data.component.footer;

  return (
    <>
      <S.Container>
        <S.Title>{title}</S.Title>

        <S.NavList>
          {navList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </S.NavList>

        <S.Copyright>{copyright}</S.Copyright>
      </S.Container>
    </>
  );
}
