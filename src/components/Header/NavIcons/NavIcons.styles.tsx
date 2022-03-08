import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const DropdownMenu = styled.ul`
  opacity: 0;
  pointer-events: none;
  padding-top: 2rem;
  position: absolute;
  right: 0;
`;

export const DropdownMenuContent = styled.div`
  width: 10rem;
  padding: 1rem 1.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  background-color: ${vars.color.black};
  border-radius: ${vars.borderRadius};
  font-size: ${vars.fontSize.default.small};

  li:hover,
  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  label {
    opacity: 0;
    touch-action: none;
    pointer-events: none;
    transition: 0.2s ease-in-out;

    &.show {
      opacity: 1;
      touch-action: auto;
      pointer-events: all;
    }
  }

  input {
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
  }

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

export const Profile = styled.div`
  position: relative;
  cursor: pointer;

  img {
    width: 2rem;
    border-radius: 0.3rem;
    margin-right: 0.5rem;
  }

  &:hover ${DropdownMenu} {
    opacity: 1;
    pointer-events: all;
  }
`;
