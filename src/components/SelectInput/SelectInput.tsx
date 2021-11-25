import React from 'react';
import { useData } from '../../contexts/Data';
import * as S from './SelectInput.styles';

export default function SelectInput() {
  const { setLang } = useData();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setLang(e.target.value);
  }

  return (
    <>
      <S.Container>
        <label htmlFor="lang">
          <span>Selecione o idioma</span>
        </label>

        <select name="lang" id="lang" onChange={handleChange}>
          <option value="br">Português</option>
          <option value="en">English</option>
        </select>
      </S.Container>
    </>
  );
}
