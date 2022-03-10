// Libs
import React from 'react';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

// Images
import profile from '../../../../../images/users/1.png';
import { auth } from '../../../../../libs/firebase';

// Styles
import * as S from './Profile.styles';

export default function Profile() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth).then(() => {
      navigate('/login');
    });
  }

  return (
    <div>
      <S.Profile>
        <S.ProfileImage src={profile} alt="profile image" />

        <S.DropdownMenu>
          <S.DropdownMenuList className="content">
            <S.DropdownMenuItem>
              <Link to="/your-account">Minha Conta</Link>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </S.DropdownMenuItem>
          </S.DropdownMenuList>
        </S.DropdownMenu>
      </S.Profile>
    </div>
  );
}
