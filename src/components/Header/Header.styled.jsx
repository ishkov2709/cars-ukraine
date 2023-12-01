import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Wrapper = styled.header`
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
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
`;

export const Img = styled.img``;
