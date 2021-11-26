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
        <h1>Perfis</h1>

        <S.List>
          <li>
            <div>
              <img src={user} alt="" />
              <h2>Vinicius</h2>
            </div>
            <Link to="/profiles/manage">Editar</Link>
          </li>

          <li>
            <div>
              <img src={user} alt="" />
              <h2>Vinicius</h2>
            </div>
            <Link to="/profiles/manage">Editar</Link>
          </li>

          <li>
            <div>
              <img src={user} alt="" />
              <h2>Vinicius</h2>
            </div>
            <Link to="/profiles/manage">Editar</Link>
          </li>
        </S.List>
      </S.Container>
    </>
  );
}
