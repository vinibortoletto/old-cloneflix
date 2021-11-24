import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';

export const Container = styled.img`
  width: 6rem;

  ${media(550)} {
    width: 9rem;
  }

  ${media(DisplaySize.Laptop)} {
    width: 13rem;
  }
`;
