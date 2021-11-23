import styled, { css } from 'styled-components/macro';
import { media, DisplaySize } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

const Button = css`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  margin: auto;
  margin-top: 1rem;

  ${media(DisplaySize.Laptop)} {
    height: 4rem;
    width: 14rem;
    margin: 0;
    justify-content: center;
    font-size: ${vars.fontSize.subtitle.big};
  }
`;

const Input = css`
  ${media(DisplaySize.Tablet)} {
    input {
      height: 4rem;
    }

    label.active {
      font-size: ${vars.fontSize.default.small};
    }
  }
`;

export const Container = styled.form`
  max-width: 25rem;
  margin: auto;
  padding: 0 ${vars.sidePadding.small};

  ${media(DisplaySize.Laptop)} {
    max-width: 100%;
  }
`;

export const Title = styled.h3`
  font-weight: normal;
  font-size: ${vars.fontSize.subtitle.small};
  margin-bottom: 1rem;

  ${media(550)} {
    font-size: ${vars.fontSize.subtitle.big};
  }

  ${media(DisplaySize.Laptop)} {
    font-size: ${vars.fontSize.default.big};
  }
`;

export const Wrapper = styled.div`
  ${media(DisplaySize.Laptop)} {
    display: flex;
  }

  ${Input};

  button {
    ${Button};
  }
`;
