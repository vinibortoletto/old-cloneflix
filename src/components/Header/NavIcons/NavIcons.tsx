import React from 'react';
import * as S from './NavIcons.styles';
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import profile from '../../../images/users/1.png';

export default function NavIcons() {
  return (
    <>
      <S.Container>
        <S.Search>
          <FaSearch />
        </S.Search>
        <S.Profile>
          <img src={profile} alt="profile image" />
          <IoMdArrowDropdown />
        </S.Profile>
      </S.Container>
    </>
  );
}
