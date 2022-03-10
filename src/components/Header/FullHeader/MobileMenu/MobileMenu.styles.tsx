import styled from 'styled-components/macro';
import { DisplaySize, media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  margin-right: 0.5rem;

  ${media(DisplaySize.Laptop)} {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const MenuListContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${vars.size.header.small});
  background-color: #0000006f;

  position: fixed;
  left: 0;
  bottom: 0;

  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-in-out;

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

export const MenuList = styled.ul`
  width: 13rem;
  height: 100%;
  padding: ${vars.sidePadding.small};

  ${media(550)} {
    padding: 0 ${vars.sidePadding.big};
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: ${vars.fontSize.default.small};
  font-weight: bold;
  background-color: ${vars.color.black};
  color: ${vars.color.mediumGrey};

  transform: translateX(-100%);
  transition: 0.2s ease-in-out;

  &.show {
    transform: translateX(0%);
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 0.5rem;
  }
`;
