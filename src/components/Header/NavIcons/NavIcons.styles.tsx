import styled from 'styled-components/macro';
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

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Search = styled.li``;

export const Profile = styled.li`
  position: relative;

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
