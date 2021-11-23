import React from 'react'
import * as S from './SelectInput.styles'

export default function SelectInput() {
  return (
    <>
      <S.Container>
        <label htmlFor="lang">
          <span>Selecione o idioma</span>
        </label>
        <select name="lang" id="lang">
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </S.Container>
    </>
  )
}
