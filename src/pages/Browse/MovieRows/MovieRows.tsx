// Libs
import React, { useEffect, useState } from 'react';

// Contexts
import { useLibrary } from '../../../contexts/Library';

// Styles
import * as S from './MovieRows.styles';

// Types
import { RowProps } from '../../../types/libraryContextTypes';

export default function MovieRows() {
  const { libraryRows } = useLibrary();

  return (
    <>
      {libraryRows && (
        <S.Container>
          {libraryRows.map((row: RowProps, index) => (
            <S.Row key={index}>
              <S.RowTitle>{row.title}</S.RowTitle>

              <S.RowContainer>
                {row.item.results.map((item: any) => (
                  <S.RowCard key={item.id}>
                    <S.RowCardImage
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.overview}
                    />

                    {/* <S.RowCardTitle>
                      {item.name ? item.name : item.title}
                    </S.RowCardTitle> */}
                  </S.RowCard>
                ))}
              </S.RowContainer>
            </S.Row>
          ))}
        </S.Container>
      )}
    </>
  );
}
