import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

type Props = { pathname: string };

export const Container = styled.div<Props>`
  max-width: 100rem;
  width: 100%;
  height: ${vars.size.header.small};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${vars.sidePadding.small};
  margin: auto;
  font-size: ${vars.fontSize.default.tiny};

  ${media(550)} {
    font-size: ${vars.fontSize.default.small};
    padding: 0 ${vars.sidePadding.big};
  }

  ${media(DisplaySize.Tablet)} {
    height: ${(props) =>
      props.pathname !== '/your-account' &&
      props.pathname !== '/browse' &&
      `${vars.size.header.big}`};
  }

  ${(props) => props.pathname === '/signup' && `border-bottom: 1px solid ${vars.color.grey};`}

  ${(props) =>
    (props.pathname === '/your-account' || props.pathname === '/browse') &&
    `background-color: ${vars.color.black}};
     display: flex;`}
`;

export const Wrapper = styled.div<Props>`
  display: flex;

  ${(props) =>
    props.pathname === '/signup' &&
    ` button {
        background-color: transparent;
        color: ${vars.color.black};
        font-weight: bold;
        font-size: ${vars.fontSize.default.big};

    &:hover {
      text-decoration: underline;
    }
  }`}

  display: ${(props) =>
    (props.pathname === '/your-account' || props.pathname === '/browse') && 'none'};
`;
