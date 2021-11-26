import React from 'react';
import * as S from './BgImg.styles';

// Images
import bgImgSmall from '../../images/misc/bg-small.jpg';
import bgImgMedium from '../../images/misc/bg-medium.jpg';
import bgImgLarge from '../../images/misc/bg-large.jpg';

// Contexts
import { useData } from '../../contexts/Data';

type Props = { login?: boolean };

export default function BgImg({ login }: Props) {
  const { data } = useData();
  const { bgImgAlt } = data.pages.landing.hero;

  return (
    <>
      <S.Container login>
        <div className="shadow" />
        <img
          src={bgImgSmall}
          srcSet={`${bgImgSmall} 1000vw, ${bgImgMedium} 1500vw, ${bgImgLarge} 1800vw`}
          alt={bgImgAlt}
        />
      </S.Container>
    </>
  );
}
