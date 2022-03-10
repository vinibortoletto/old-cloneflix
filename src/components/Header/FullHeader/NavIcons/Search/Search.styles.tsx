import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../../../helpers/styles/mixins';
import { vars } from '../../../../../helpers/styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  opacity: 0;
  touch-action: none;
  pointer-events: none;
  transition: 0.2s ease-in-out;

  &.show {
    opacity: 1;
    touch-action: auto;
    pointer-events: all;
  }
`;

export const Input = styled.input`
  height: 2rem;
  width: 80%;
  padding-left: 0.5rem;

  float: right;
  background-color: ${vars.color.darkGrey};
  border: 1px solid ${vars.color.grey};
  border-radius: ${vars.borderRadius};
  font-size: ${vars.fontSize.default.small};

  ${media(DisplaySize.Laptop)} {
    width: 100%;
  }
`;

export const Button = styled.button`
  svg {
    font-size: 1.3rem;
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    z-index: 1;
    transition: 0.2s ease-in-out;

    &.hide {
      opacity: 0.3;
    }
  }
`;
