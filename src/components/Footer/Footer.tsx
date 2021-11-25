import React from 'react';
import { useData } from '../../contexts/Data';
import * as S from './Footer.styles';

export default function Footer() {
  const { data } = useData();
  const { copyright, navList, title } = data.components.footer;

  return (
    <>
      <S.Container id="footer">
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
