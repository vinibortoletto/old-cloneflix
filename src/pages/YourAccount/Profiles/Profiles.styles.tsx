import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  padding: 2rem ${vars.sidePadding.small};
  margin-top: 2rem;
  border: 1px solid ${vars.color.mediumGrey};
  background-color: ${vars.color.white};

  h1 {
    color: ${vars.color.grey};
    font-size: ${vars.fontSize.default.big};
    margin-bottom: 1rem;
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    div {
      display: flex;
      align-items: center;
    }
  }

  img {
    width: 3rem;
    border-radius: ${vars.borderRadius};
    margin-right: 0.5rem;
  }

  a {
    color: ${vars.color.blue};
    &:hover {
      text-decoration: underline;
    }
  }
`;
