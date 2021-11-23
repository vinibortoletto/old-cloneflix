import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';

export const Container = styled.header`
  max-width: 125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  margin: auto;
  font-size: 0.9rem;

  position: absolute;
  top: 0;
  left: 0;

  ${media(550)} {
    font-size: 1rem;
    padding: 1.5rem 2.5rem;
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
