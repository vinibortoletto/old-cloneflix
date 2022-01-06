import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.p`
  margin: 0.5rem 0;
  text-align: left;
  font-size: ${vars.fontSize.default.tiny};
  color: ${vars.color.orange};

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
  }
`;
