// Libs
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Contexts
import { useLibrary } from '../../../contexts/Library';

// Styles
import * as S from './MovieRows.styles';

// Types
import { RowProps } from '../../../types/libraryContextTypes';

export default function MovieRows() {
  const { libraryRows } = useLibrary();
  const settings = {
    className: 'slider variable-width',
    slidesToShow: 1,
    slidesToScroll: 5,
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {libraryRows && (
        <S.Container>
          {libraryRows.map((row: RowProps, index) => (
            <S.Row key={index}>
              <S.RowTitle>{row.title}</S.RowTitle>

              <S.RowContainer>
                <Slider {...settings}>
                  {row.item.results.map((item: any) => (
                    <S.RowCard key={item.id}>
                      <S.RowCardImage
                        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                        alt={item.overview}
                      />
                    </S.RowCard>
                  ))}
                </Slider>
              </S.RowContainer>
            </S.Row>
          ))}
        </S.Container>
      )}
    </>
  );
}
