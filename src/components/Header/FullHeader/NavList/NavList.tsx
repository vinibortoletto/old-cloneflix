// Libs
import React from 'react';

// Contexts
import { useData } from '../../../../contexts/Data';

// Styles
import * as S from './NavList.styles';

export default function NavList() {
  const { lang } = useData();

  return (
    <>
      <S.Container>
        <li className="selected">Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New &amp; Popular</li>
        <li>My List</li>
      </S.Container>
    </>
  );
}
