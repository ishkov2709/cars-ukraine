import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  color: inherit;
  text-decoration: none;
`;

export const Img = styled.img``;
