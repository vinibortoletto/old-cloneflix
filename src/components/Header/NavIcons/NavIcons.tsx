import React from 'react';
import * as S from './NavIcons.styles';
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import profile from '../../../images/users/1.png';
import { useLocation } from 'react-router';

export default function NavIcons() {
  const pathname = useLocation().pathname;

  return (
    <>
      <S.Container>
        {pathname === '/browse' && (
          <S.Search>
            <FaSearch />
          </S.Search>
        )}

        <S.Profile>
          <img src={profile} alt="profile image" />
          <IoMdArrowDropdown />
        </S.Profile>
      </S.Container>
    </>
  );
}
