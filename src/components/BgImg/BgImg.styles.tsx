import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div<{ login: boolean }>`
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

  ${(props) =>
    props.login &&
    `
      img {
        height: 100vh;
      }
    `}
`;
