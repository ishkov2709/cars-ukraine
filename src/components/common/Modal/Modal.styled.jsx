import styled from 'styled-components';
import { color } from '../../../styles/colors';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${color.primary.black}80;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 541px;
  min-height: 752px;

  padding: 40px;

  background-color: #fff;

  border-radius: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;

  margin-bottom: 14px;

  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  margin-bottom: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${color.primary.black}80;

  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 24px;
  }
`;

export const InfoPart = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 24px;
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  margin-bottom: 8px;
`;

export const ConditionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

export const Condition = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  padding: 7px 14px;

  background-color: ${color.primary.gray};

  border-radius: 35px;

  & span {
    font-weight: 600;
  }
`;

export const Accent = styled.span`
  color: ${color.primary.blue};

  font-size: inherit;
`;

export const Link = styled.a`
  padding: 12px 50px;

  background-color: ${color.primary.blue};
  color: #ffffff;

  font-weight: 600;
  font-size: 14px;

  text-decoration: none;

  border-radius: 12px;

  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${color.primary.accent};
  }
`;
