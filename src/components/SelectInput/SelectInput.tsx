// Libs
import React from 'react';
import { useLocation } from 'react-router';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
import * as S from './SelectInput.styles';

type Props = {
  footer?: boolean;
};

export default function SelectInput({ footer }: Props) {
  const { lang, setLang, data } = useData();
  const { selectInput } = data.components;
  const pathname = useLocation().pathname;

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    setLang(lang);
  }

  return (
    <>
      <S.Container pathname={pathname} footer={footer}>
        <S.Label htmlFor="lang">
          <span>{selectInput}</span>
        </S.Label>

        <S.Select name="lang" id="lang" onChange={handleChange} value={lang}>
          <option value="br">Português</option>
          <option value="en">English</option>
        </S.Select>
      </S.Container>
    </>
  );
}
