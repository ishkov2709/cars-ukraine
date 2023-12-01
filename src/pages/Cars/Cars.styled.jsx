import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Section = styled.section`
  padding-top: 20px;

  padding-bottom: 50px; //Temorary
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
`;
