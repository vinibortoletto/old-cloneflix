import React from 'react';
import { useData } from '../../contexts/Data';

// Styles
import * as S from './SelectInput.styles';

export default function SelectInput() {
  const { lang, setLang } = useData();

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    setLang(lang);
  }

  return (
    <>
      <S.Container>
        <label htmlFor="lang">
          <span>Selecione o idioma</span>
        </label>

        <select name="lang" id="lang" onChange={handleChange} value={lang}>
          <option value="br">Português</option>
          <option value="en">English</option>
        </select>
      </S.Container>
    </>
  );
}
