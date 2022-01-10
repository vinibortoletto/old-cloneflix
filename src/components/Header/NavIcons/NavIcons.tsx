// Libs
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../libs/firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Images
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import profile from '../../../images/users/1.png';

// Styles
import * as S from './NavIcons.styles';

export default function NavIcons() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth).then(() => {
      navigate('/login');
    });
  }

  return (
    <>
      <S.Container>
        {pathname === '/browse' && (
          <S.Search>
            <FaSearch />
          </S.Search>
        )}

        <div>
          <S.Profile>
            <img src={profile} alt="profile image" />
            <IoMdArrowDropdown />

            <S.DropdownMenu>
              <S.DropdownMenuContent className="content">
                <li>
                  <Link to="/your-account">Minha Conta</Link>
                </li>
                <li>
                  <button type="button" onClick={handleSignOut}>
                    Sair
                  </button>
                </li>
              </S.DropdownMenuContent>
            </S.DropdownMenu>
          </S.Profile>
        </div>
      </S.Container>
    </>
  );
}
