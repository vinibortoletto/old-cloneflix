// Libs
import React, { MouseEvent, FocusEvent } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../libs/firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Images
import { FaSearch } from 'react-icons/fa';
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

  function toggleSearch(e: MouseEvent | FocusEvent) {
    const label = document.getElementById('search-label') as HTMLLabelElement;
    const input = label.firstChild as HTMLInputElement;
    const icon = document.getElementById('search-icon') as HTMLElement;

    if (e.type === 'click') {
      label.classList.add('show');
      input.focus();
      icon.classList.add('hide');
    }
    if (e.type === 'blur') {
      label.classList.remove('show');
      icon.classList.remove('hide');
    }
  }

  return (
    <>
      <S.Container>
        {pathname === '/browse' && (
          <S.Search>
            <button type="button" onClick={toggleSearch}>
              <FaSearch id="search-icon" />
            </button>

            <label id="search-label" htmlFor="search" aria-label="search">
              <input type="search" id="search" onBlur={toggleSearch} />
            </label>
          </S.Search>
        )}

        <div>
          <S.Profile>
            <img src={profile} alt="profile image" />

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
