import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.h2`
  font-size: ${vars.fontSize.subtitle.small};
  margin-bottom: 1rem;

  ${media(550)} {
    font-size: ${vars.fontSize.subtitle.big};
  }
`;
