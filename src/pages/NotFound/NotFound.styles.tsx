import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 50rem;
  display: grid;
  margin: auto;
  padding: 5rem 1rem;
  text-align: center;
  text-shadow: 0 2px 0 ${vars.color.darkGrey};

  button {
    padding: 1rem;
    margin: 2rem auto;
    background-color: ${vars.color.white};
    color: ${vars.color.black};
    font-weight: bold;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(0.5);

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const ErrorCode = styled.div`
  margin: auto;
  font-size: ${vars.fontSize.subtitle.small};
  color: ${vars.color.mediumGrey};
  border-left: 1px solid ${vars.color.red};
  padding: 1rem;

  span {
    font-weight: bold;
    color: ${vars.color.white};
  }

  ${media(500)} {
    font-size: ${vars.fontSize.subtitle.big};
  }
`;
