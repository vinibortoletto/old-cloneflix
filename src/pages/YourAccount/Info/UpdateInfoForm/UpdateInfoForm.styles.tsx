import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.form`
  display: none;
  height: 0;

  flex-wrap: wrap;
  justify-content: end;
  margin-top: 1rem;

  &.show {
    display: flex;
    height: auto;
  }

  input {
    margin: 0%;
  }

  button {
    color: ${vars.color.white};
    padding: 0.5rem 1rem;

    &:hover {
      text-decoration: none;
    }

    &[type='reset'] {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }
  }

  ${media(550)} {
    flex-wrap: nowrap;

    button {
      height: 3.5rem;
    }
  }
`;
