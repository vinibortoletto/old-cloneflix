import React from 'react';
import { useLocation } from 'react-router';
import { useData } from '../../contexts/Data';
import * as S from './Footer.styles';

export default function Footer() {
  const { data } = useData();
  const { copyright, navList, title } = data.components.footer;
  const pathname = useLocation().pathname;

  return (
    <>
      <S.Container id="footer" pathname={pathname}>
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
