import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  padding: 2rem ${vars.sidePadding.small};
  margin-top: 2rem;
  border: 1px solid ${vars.color.mediumGrey};
`;

export const AccountInfo = styled.div`
  h1 {
    color: ${vars.color.mediumGrey};
    font-size: ${vars.fontSize.default.big};
    margin-bottom: 1rem;
  }

  .email,
  .password {
    margin-bottom: 1rem;

    button {
      color: ${vars.color.blue};

      &:hover {
        text-decoration: underline;
      }
    }

    form {
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
          color: ${vars.color.mediumGrey};
          margin-right: 0.5rem;
        }
      }

      ${media(550)} {
        flex-wrap: nowrap;

        button {
          height: 3.5rem;
        }
      }
    }
  }
`;
