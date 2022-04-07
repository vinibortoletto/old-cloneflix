import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div``;

export const RowTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const RowContainer = styled.div``;

export const RowCard = styled.div`
  height: 15rem;
  width: 10rem;
  min-width: 8rem;
  cursor: pointer;
`;

export const RowCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${vars.borderRadius};
`;

export const Row = styled.div`
  margin-bottom: 3rem;

  .slick-slide {
    margin: 0 0.25rem;
  }

  .slick-next,
  .slick-prev {
    height: 100%;
    width: 2.5rem;

    position: absolute;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);

    /* Hidden in mobile */
    display: none !important;
    ${media(DisplaySize.Laptop)} {
      display: block !important;
    }

    /* Hidden until row is hovered */
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease;
  }

  &:hover {
    /* Show on hover */
    .slick-next,
    .slick-prev {
      opacity: 1;
      pointer-events: all;
    }
  }

  .slick-next::before,
  .slick-prev::before {
    font-size: 4rem;
    line-height: 0;
  }

  .slick-prev {
    left: 0;
    &::before {
      content: '‹';
    }
  }
  .slick-next {
    right: 0;
    &::before {
      content: '›';
    }
  }
`;
