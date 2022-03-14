// Libs
import React, { useEffect } from 'react';

// Components
import Spinner from '../../components/Spinner/Spinner';
import MovieRows from './MovieRows/MovieRows';
import Spotlight from './Spotlight/Spotlight';

// Contexts
import { useLibrary } from '../../contexts/Library';

// Styles
import * as S from './Browse.styles';

export default function Browse() {
  const { libraryRows, isLoading } = useLibrary();

  return (
    <>
      {isLoading && (
        <S.SpinnerContainer>
          <Spinner />
        </S.SpinnerContainer>
      )}

      <S.Container>
        <Spotlight />
        <MovieRows />
      </S.Container>
    </>
  );
}

/*
    - Spotlight
      - Bg
      - Info
         - Movie name
         - Num of seasons
         - description
         - buttons
            - play
            - more info
    - Movie row
      - Row title
      - Cards
*/
