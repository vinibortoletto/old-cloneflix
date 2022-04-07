import styled from 'styled-components/macro';
import { vars } from '../../../../../helpers/styles/variables';

export const DropdownMenu = styled.div`
  opacity: 0;
  pointer-events: none;
  padding-top: 1.5rem;
  position: absolute;
  right: 0;
`;

export const Profile = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${DropdownMenu} {
    opacity: 1;
    pointer-events: all;
  }
`;

export const ProfileImage = styled.img`
  width: 2rem;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
`;

export const DropdownMenuList = styled.ul`
  width: 10rem;
  padding: 1rem 1.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  background-color: ${vars.color.black};
  border-radius: ${vars.borderRadius};
  font-size: ${vars.fontSize.default.small};
`;

export const DropdownMenuItem = styled.li`
  li:hover,
  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
