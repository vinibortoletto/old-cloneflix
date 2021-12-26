import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  padding: 2rem ${vars.sidePadding.small};
  color: ${vars.color.black};

  ${media(DisplaySize.Tablet)} {
    padding: 2rem ${vars.sidePadding.big};
  }
`;

export const Line = styled.div`
  background-color: ${vars.color.mediumGrey};
  height: 1px;
  width: 100%;
  margin: 2rem 0;

  display: none;
`;
