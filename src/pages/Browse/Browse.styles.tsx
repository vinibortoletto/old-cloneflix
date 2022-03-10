import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  max-width: ${vars.maxWidth.content};
  margin: auto;
  padding: calc(${vars.size.header.small} + 2rem) ${vars.sidePadding.small} 2rem
    ${vars.sidePadding.small};

  ${media(550)} {
    padding-left: ${vars.sidePadding.big};
    padding-right: ${vars.sidePadding.big};
  }
`;
