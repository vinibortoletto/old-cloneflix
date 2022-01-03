import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section``;

export const Title = styled.h2`
  font-size: ${vars.fontSize.subtitle.big};
  margin-bottom: 1.5rem;
`;

export const UserInfo = styled.div`
  margin-bottom: 1rem;
  span {
    opacity: 0.5;
  }
`;

export const ButtonsContainer = styled.div`
  button:hover {
    text-decoration: underline;
  }

  .delete-btn {
    color: ${vars.color.red};
    margin-right: 1rem;
  }

  .update-btn {
    color: ${vars.color.blue};
  }
`;
