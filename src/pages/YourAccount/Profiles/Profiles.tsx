import React from 'react';
import { Link } from 'react-router-dom';

// Images
import user from '../../../images/users/1.png';

// Styles
import * as S from './Profiles.styles';

export default function Profiles() {
  return (
    <>
      <S.Container>
        <S.Title>Perfis</S.Title>

        <S.List>
          <li>
            <S.UserInfo>
              <img src={user} alt="" />
              <h2>Vinicius</h2>
            </S.UserInfo>
            <Link to="/profiles/manage">Editar</Link>
          </li>

          <li>
            <S.UserInfo>
              <img src={user} alt="" />
              <h2>Vinicius</h2>
            </S.UserInfo>
            <Link to="/profiles/manage">Editar</Link>
          </li>

          <li>
            <S.UserInfo>
              <img src={user} alt="" />
              <h2>Vinicius</h2>
            </S.UserInfo>
            <Link to="/profiles/manage">Editar</Link>
          </li>
        </S.List>
      </S.Container>
    </>
  );
}
