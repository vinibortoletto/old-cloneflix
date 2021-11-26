import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  color: ${vars.color.black};
  padding: 2rem ${vars.sidePadding.small};
`;

export const Line = styled.div`
  background-color: ${vars.color.mediumGrey};
  height: 1px;
  width: 100%;
  margin: 2rem 0;

  display: none;
`;
