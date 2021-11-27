import styled, { css } from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

type Props = {
  pathname: string;
  footer?: boolean;
};

const AfterElmt = css`
  &::after {
    content: '▼';
    position: absolute;
    top: 0.45rem;
    left: 6rem;
    transform: scaleX(1.5) scale(0.6);
    pointer-events: none;
    font-size: ${vars.fontSize.default.tiny};

    ${media(550)} {
      top: 0.3rem;
      left: 8rem;
      font-size: ${vars.fontSize.default.big};
    }
  }
`;

const BeforeElmt = css`
  &::before {
    content: '🌐';
    position: absolute;
    top: 0.5rem;
    left: 0.4rem;
    filter: grayscale(1) contrast(3);
    pointer-events: none;

    ${media(550)} {
      top: 0.4rem;
      left: 0.6rem;
    }
  }
`;

export const Container = styled.div<Props>`
  position: relative;
  margin-right: 0.5rem;

  ${media(550)} {
    margin-right: 1.5rem;
  }

  ${AfterElmt};
  ${BeforeElmt};

  option {
    background: ${vars.color.black};
  }

  ${(props) =>
    (props.pathname === '/signup' || props.pathname === '/your-account') &&
    `
      color: ${vars.color.mediumGrey};

      &::before {
        opacity: .6;
      }

      select {
        color: ${vars.color.mediumGrey};
      }

      option {
        background: ${vars.color.white};
      }
    `};

  ${(props) =>
    props.footer &&
    `
      color: ${vars.color.mediumGrey};
      &::before {
        top: 0.55rem;
        left: 0.6rem;
      }

      &::after {
        top: 0.8rem;
        left: 7rem;
      }

      select {
        color: ${vars.color.mediumGrey};
        padding: 0.6rem 2rem;
      }

      option {
        background: ${vars.color.white};
      }

      ${media(550)} {
        &::after {
          top: 0.6rem;
          left: 8.5rem;
        }

        select {
          padding: 0.6rem 2.5rem;
        }
      }
    `};
`;

export const Label = styled.label`
  display: block;
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  margin: -1px;
  clip: rect(0 0 0 0);
  border: 0;
`;

export const Select = styled.select`
  padding: 0.4rem 1.7rem;
  border: 1px solid ${vars.color.mediumGrey};
  border-radius: ${vars.borderRadius};
  appearance: none;
  background-color: transparent;

  ${media(550)} {
    padding: 0.4rem 2.5rem;
  }
`;
