import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  height: 100vh;
  max-width: 30rem;
  margin: auto;
  padding: ${vars.sidePadding.small};

  h1 {
    font-size: 2.5rem;
  }

  img {
    height: 100vh;
  }

  input {
    background-color: ${vars.color.grey};
    color: ${vars.color.white};
  }

  button {
    margin-top: 2rem;
  }
`;

export const Wrapper = styled.div`
  padding: ${vars.sidePadding.small};
  border-radius: ${vars.borderRadius};
  background-color: rgba(0, 0, 0, 0.7);

  ${media(DisplaySize.Tablet)} {
    padding: 3rem;
  }
`;

export const Signup = styled.p`
  font-size: ${vars.fontSize.default.small};
  margin-top: 2rem;

  a {
    color: ${vars.color.blue};
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
