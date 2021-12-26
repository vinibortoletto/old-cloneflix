import React from 'react';

// Styles
import * as S from './UpdateInfoForm.styles';

// Components
import Button, { ButtonTypes } from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';

type Props = {
  hideForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  id: string;
};

export default function UpdateInfoForm({ hideForm, id }: Props) {
  return (
    <>
      <S.Container>
        <Input id={id} type={id} />
        <Button type={ButtonTypes.Reset} onClick={hideForm}>
          Cancelar
        </Button>
        <Button type={ButtonTypes.Submit}>Salvar</Button>
      </S.Container>
    </>
  );
}
