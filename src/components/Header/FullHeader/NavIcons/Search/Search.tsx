// Libs
import React, { MouseEvent, FocusEvent } from 'react';

// Images
import { FaSearch } from 'react-icons/fa';

// Styles
import * as S from './Search.styles';

export default function Search() {
  function toggleSearch(e: MouseEvent | FocusEvent) {
    const searchLabel = document.getElementById('search-label') as HTMLLabelElement;
    const searchInput = searchLabel.firstChild as HTMLInputElement;
    const searchIcon = document.getElementById('search-icon') as HTMLElement;
    const searchButton = document.getElementById('search-button') as HTMLButtonElement;

    if (e.type === 'click') {
      searchLabel.classList.add('show');
      searchIcon.classList.add('hide');
      searchInput.focus();
      searchButton.disabled = true;
      searchButton.style.pointerEvents = 'none';
    }

    if (e.type === 'blur') {
      searchLabel.classList.remove('show');
      searchIcon.classList.remove('hide');
      searchButton.disabled = false;
      searchButton.style.pointerEvents = 'all';
    }
  }

  return (
    <>
      <S.Container>
        <S.Button type="button" onClick={toggleSearch} id="search-button">
          <FaSearch id="search-icon" />
        </S.Button>

        <S.Label id="search-label" htmlFor="search" aria-label="search">
          <S.Input type="search" id="search" onBlur={toggleSearch} />
        </S.Label>
      </S.Container>
    </>
  );
}
