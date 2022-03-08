import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';

export const Container = styled.ul`
  display: none;
  gap: 1rem;
  margin-right: auto;
  margin-left: 2rem;

  ${media(DisplaySize.Laptop)} {
    display: flex;
  }
`;
