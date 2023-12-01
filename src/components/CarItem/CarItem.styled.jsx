import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Wrapper = styled.li`
  position: relative;

  width: 274px;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;

  object-fit: cover;

  margin-bottom: 14px;
`;

export const BrandAndPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;

  color: ${color.primary.black};

  margin-bottom: 8px;
`;

export const BrandYear = styled.p``;

export const Price = styled.p``;

export const OtherInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: 270px;
  height: 40px;
  font-size: 12px;
  font-weight: 400;

  color: ${color.primary.black}80;

  margin-bottom: 28px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;

  &:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    height: 16px;
    width: 1px;

    background-color: ${color.primary.black}1A;
    margin-left: 6px;
  }
`;

export const FavBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background: transparent;
`;
