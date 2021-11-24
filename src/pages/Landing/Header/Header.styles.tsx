import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.header`
  max-width: ${vars.maxWidth};
  width: 100%;
  height: ${vars.size.header.landing};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${vars.sidePadding.small};
  margin: auto;
  font-size: ${vars.fontSize.default.tiny};

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
    padding: 0 ${vars.sidePadding.big};
  }
`;

export const Logo = styled.div`
  display: flex;

  img {
    width: 6rem;

    ${media(550)} {
      width: 9rem;
    }

    ${media(950)} {
      width: 11rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
