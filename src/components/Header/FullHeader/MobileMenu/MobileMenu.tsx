// Libs
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../libs/firebase';

// Images
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { FaListUl, FaUserAlt } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';

// Styles
import * as S from './MobileMenu.styles';

export default function MobileMenu() {
  const navigate = useNavigate();

  function handleOpenMobileMenu() {
    const menuContainer = document.getElementById('menu') as HTMLDivElement;
    const menuList = document.getElementById('menu-list') as HTMLDivElement;

    menuContainer.classList.toggle('show');
    menuList.classList.toggle('show');
  }

  function handleSignOut() {
    signOut(auth).then(() => {
      navigate('/login');
    });
  }

  return (
    <>
      <S.Container>
        <S.MenuButton id="menu-button" onClick={handleOpenMobileMenu}>
          <AiOutlineMenu />
        </S.MenuButton>

        <S.MenuListContainer id="menu">
          <S.MenuList id="menu-list">
            <S.MenuItem>
              <AiFillHome />
              <span>Home</span>
            </S.MenuItem>
            <S.MenuItem>
              <FaListUl />
              <span>My List</span>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/your-account">
                <FaUserAlt />
                <span>Account</span>
              </Link>
            </S.MenuItem>
            <S.MenuItem onClick={handleSignOut}>
              <GoSignOut />
              <span>Sign Out</span>
            </S.MenuItem>
          </S.MenuList>
        </S.MenuListContainer>
      </S.Container>
    </>
  );
}
