import React from 'react';
import * as S from './BgImg.styles';

// Images
import bgImgSmall from '../../images/misc/bg-small.jpg';
import bgImgMedium from '../../images/misc/bg-medium.jpg';
import bgImgLarge from '../../images/misc/bg-large.jpg';

// Contexts
import { useData } from '../../contexts/Data';
import { useLocation } from 'react-router';

export default function BgImg() {
  const { data } = useData();
  const { bgImgAlt } = data.pages.landing.hero;
  const pathname = useLocation().pathname;

  return (
    <>
      <S.Container pathname={pathname}>
        <div className="shadow" />
        <img
          src={bgImgSmall}
          srcSet={`${bgImgSmall} 1000w, ${bgImgMedium} 1500w, ${bgImgLarge} 1800w`}
          alt={bgImgAlt}
        />
      </S.Container>
    </>
  );
}
