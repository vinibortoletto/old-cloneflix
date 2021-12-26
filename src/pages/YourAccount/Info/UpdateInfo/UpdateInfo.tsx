import React from 'react';

// Styles
import * as S from './UpdateInfo.styles';

type Props = {
  infoTitle: string;
  infoContent: string;
  buttonText: string;
  showForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function UpdateInfo({
  infoTitle,
  infoContent,
  buttonText,
  showForm,
}: Props) {
  return (
    <S.Container>
      <p>
        {infoTitle}: <span>{infoContent}</span>
      </p>
      <button type="button" onClick={showForm}>
        {buttonText}
      </button>
    </S.Container>
  );
}
