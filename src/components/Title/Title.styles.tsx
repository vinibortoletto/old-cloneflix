import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.h1`
  font-size: ${vars.fontSize.title.small};
  font-weight: bold;
  margin-bottom: 1rem;

  ${media(550)} {
    font-size: ${vars.fontSize.title.big};
  }
`;
