import styled from 'styled-components';
import { color } from '../../../styles/colors';

export const Btn = styled.button`
  background-color: ${color.primary.blue};
  color: #ffffff;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;

  border-radius: 12px;

  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${color.primary.accent};
  }
`;
