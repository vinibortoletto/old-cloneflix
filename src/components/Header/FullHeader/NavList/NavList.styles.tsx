import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../../helpers/styles/mixins';

export const Container = styled.div`
  display: none;

  ${media(DisplaySize.Laptop)} {
    display: flex;
  }
`;
