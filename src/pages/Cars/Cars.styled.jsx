import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Section = styled.section`
  margin-top: 68px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;

  width: calc(100% - 128px);
  margin: 0 auto;
`;

export const MoreBtn = styled.button`
  display: block;
  margin: 100px auto 0 auto;

  line-height: 0.9;

  color: ${color.primary.blue};
  background: transparent;

  border-bottom: 1px solid ${color.primary.blue};
  padding-bottom: 0;

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${color.primary.accent};
  }
`;

export const EmptyData = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0;

  font-size: 18px;
  color: ${color.primary.black};
`;
