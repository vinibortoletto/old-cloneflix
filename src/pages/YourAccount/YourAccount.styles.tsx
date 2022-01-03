import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 73rem;
  margin: auto;
  padding: 2rem ${vars.sidePadding.small};

  ${media(550)} {
    padding: 2rem ${vars.sidePadding.big};
  }
`;

export const Line = styled.div`
  background-color: ${vars.color.mediumGrey};
  height: 1px;
  width: 100%;
  margin: 2rem 0;
`;

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.8;

  background-color: ${vars.color.darkGrey};
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.div`
  ${media(DisplaySize.Tablet)} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
