// Libs
import React from 'react';
import { useLocation } from 'react-router';

// Components
import SelectInput from '../SelectInput/SelectInput';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
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

        <SelectInput footer />

        <S.Copyright>{copyright}</S.Copyright>
      </S.Container>
    </>
  );
}
