import styled from 'styled-components/macro';
import { media, DisplaySize } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 50rem;
  height: calc(
    ${vars.size.heroBgImg.small} - ${vars.size.header.landing} - 2rem
  );
  text-align: center;
  padding: 0 ${vars.sidePadding.small};
  margin: auto;
  margin-top: 2rem;

  ${media(550)} {
    height: calc(
      ${vars.size.heroBgImg.big} - ${vars.size.header.landing} - 7.5rem
    );
    margin-top: 7.5rem;
    padding: 0 ${vars.sidePadding.big};
  }

  ${media(DisplaySize.Laptop)} {
    height: calc(
      ${vars.size.heroBgImg.medium} - ${vars.size.header.landing} - 10rem
    );
    margin-top: 10rem;
  }
`;

export const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  .shadow {
    position: inherit;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8)
    );
  }

  img {
    width: 100%;
    height: ${vars.size.heroBgImg.small};
    object-fit: cover;

    ${media(550)} {
      height: ${vars.size.heroBgImg.big};
    }

    ${media(DisplaySize.Laptop)} {
      height: ${vars.size.heroBgImg.medium};
    }
  }
`;

export const Title = styled.h1`
  font-size: ${vars.fontSize.title.small};
  font-weight: bold;
  margin-bottom: 1rem;

  ${media(550)} {
    font-size: ${vars.fontSize.title.big};
  }
`;

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: ${vars.fontSize.subtitle.small};
  margin-bottom: 1rem;

  ${media(550)} {
    font-size: ${vars.fontSize.subtitle.big};
  }
`;
