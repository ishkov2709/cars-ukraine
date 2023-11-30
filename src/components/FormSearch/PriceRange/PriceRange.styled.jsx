import styled from 'styled-components';
import { color } from '../../../styles/colors';

export const Wrapper = styled.div``;

export const Box = styled.div`
  position: relative;
  display: flex;
  gap: 1px;

  border-radius: 14px;

  overflow: hidden;

  color: ${color.primary.black};

  border: 1px solid transparent;

  &:hover,
  &:focus {
    border: 1px solid ${color.primary.black}33;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 48px;
    background-color: ${color.secondary.gray};
  }
`;

export const Input = styled.input`
  background-color: ${color.primary.white};

  border: none;

  height: 48px;

  padding: 16px 24px;

  &::placeholder {
    color: ${color.primary.black};
    font-family: Manrope;
    font-weight: 600;
    font-size: 18px;
  }

  outline: none;
`;
