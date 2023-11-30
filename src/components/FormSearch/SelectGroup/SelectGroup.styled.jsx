import styled from 'styled-components';
import { color } from '../../../styles/colors';

export const Wrapper = styled.div``;

export const Box = styled.span`
  position: relative;
  display: inline-block;
`;

export const Stub = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 52px;
  width: 2px;
  height: 30px;
  background-color: ${color.primary.white};
`;
