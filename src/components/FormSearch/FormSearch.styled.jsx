import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;

  margin-bottom: 50px;
`;

export const Name = styled.p`
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;

  color: ${color.secondary.white};

  margin-bottom: 8px;
`;
