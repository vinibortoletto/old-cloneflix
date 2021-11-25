import React, { useState } from 'react';

// Images
import img1 from '../../../images/misc/section-1.jpg';
import img2 from '../../../images/misc/section-2.jpg';
import img3 from '../../../images/misc/section-3.jpg';
import img4 from '../../../images/misc/section-4.jpg';

// Components
import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';

// Styles
import * as S from './Section.styles';

type Props = {
  id: number;
  title: string;
  subtitle: string;
  imgAlt: string;
};

export default function Section({ id, title, subtitle, imgAlt }: Props) {
  function selectImg() {
    let img;

    if (id === 1) img = img1;
    if (id === 2) img = img2;
    if (id === 3) img = img3;
    if (id === 4) img = img4;

    return img;
  }

  return (
    <>
      <S.Container>
        <div className="text">
          <Title text={title} />
          <Subtitle text={subtitle} />
        </div>

        <S.Image>
          <img src={selectImg()} alt={imgAlt} />
        </S.Image>
      </S.Container>
    </>
  );
}
