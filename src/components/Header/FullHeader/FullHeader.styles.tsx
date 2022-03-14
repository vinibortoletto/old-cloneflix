import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

type Props = { pathname: string };

export const Container = styled.header<Props>`
  height: ${vars.size.header.small};
  width: 100vw;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: ${vars.sidePadding.small};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  transition: 0.2s ease-in-out;

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
    padding: ${vars.sidePadding.small} ${vars.sidePadding.big};
  }

  &.solid {
    background-color: ${vars.color.black};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${vars.maxWidth.header};
  display: flex;
  justify-content: space-between;
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
