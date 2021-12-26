import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  padding: 2rem ${vars.sidePadding.small};
  margin-top: 2rem;
  border: 1px solid ${vars.color.mediumGrey};
  background-color: ${vars.color.white};
`;

export const AccountEmail = styled.div`
  margin-bottom: 1rem;

  span {
    color: ${vars.color.mediumGrey};
  }

  button {
    color: ${vars.color.blue};

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const AccountPassword = styled.div`
  margin-bottom: 1rem;

  span {
    color: ${vars.color.mediumGrey};
  }

  button {
    color: ${vars.color.blue};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AccountTitle = styled.div`
  color: ${vars.color.grey};
  font-size: ${vars.fontSize.default.big};
  margin-bottom: 1rem;
`;
