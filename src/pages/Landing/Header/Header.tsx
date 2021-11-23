import React from 'react'
import * as S from './Header.styles'
import logo from '../../../images/misc/logo.png'
import Button, { ButtonTypes } from '../../../components/Button/Button'
import SelectInput from '../../../components/SelectInput/SelectInput'
import { Link } from 'react-router-dom'

export default function SimpleHeader() {
  return (
    <>
      <S.Container>
        <S.Logo>
          <img src={logo} alt="cloneflix logo" />
        </S.Logo>

        <S.Wrapper>
          <SelectInput />
          <Button type={ButtonTypes.Button}>
            <Link to="/signup">Entrar</Link>
          </Button>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
