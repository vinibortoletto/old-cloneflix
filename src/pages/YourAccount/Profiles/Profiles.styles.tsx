import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section``;

export const Title = styled.h2`
  font-size: ${vars.fontSize.subtitle.big};
  margin-bottom: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${vars.color.blue};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.5rem;
    border-radius: ${vars.borderRadius};
  }
`;
