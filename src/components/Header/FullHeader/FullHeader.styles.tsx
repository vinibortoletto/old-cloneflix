import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.header`
  height: ${vars.size.header.small};
  width: 100%;
  max-width: 100rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${vars.sidePadding.small};
  background-color: ${vars.color.black};

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
    padding: ${vars.sidePadding.small} ${vars.sidePadding.big};
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
