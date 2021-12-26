import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';

export const Container = styled.div`
  ${media(550)} {
    display: flex;
    justify-content: space-between;
  }
`;
