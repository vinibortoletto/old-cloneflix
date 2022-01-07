// Libs
import React from 'react';
import { useLocation } from 'react-router';

// Images
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import profile from '../../../images/users/1.png';

// Styles
import * as S from './NavIcons.styles';

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
