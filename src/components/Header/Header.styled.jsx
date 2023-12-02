import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Wrapper = styled.header.withConfig({
  shouldForwardProp: prop => prop,
})`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  background: ${props =>
    !props.currentpath ? color.primary.black + 33 : 'transparent'};
  color: ${props => (!props.currentpath ? '#ffffff' : color.primary.black)};

  width: 100%;

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const NavigLink = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  color: inherit;
  text-decoration: none;

  &.active {
    color: ${color.primary.blue};
  }

  &:hover,
  &:focus {
    color: ${color.primary.accent};
  }

  transition: color 250ms ease-in-out;
`;

export const Img = styled.img``;
