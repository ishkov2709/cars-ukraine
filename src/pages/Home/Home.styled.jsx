import styled from 'styled-components';
import { Section } from '../Cars/Cars.styled';
import bg from '../../img/bg.jpg';
import { Link } from 'react-router-dom';
import { color } from '../../styles/colors';

export const HeroSec = styled(Section)`
  background: linear-gradient(rgba(18, 20, 23, 0.7), rgba(18, 20, 23, 0.7)),
    url(${bg});
  background-size: cover;
  background-position: center center;
  padding: 280px 0;
  margin: 0;

  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;

  color: #ffffff;

  text-align: center;
`;

export const LinkTo = styled(Link)`
  width: 164px;
  padding: 14px 18px;

  background-color: ${color.primary.blue};
  color: #ffffff;

  text-decoration: none;

  font-size: 18px;
  font-weight: 600;

  border-radius: 12px;

  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${color.primary.accent};
  }
`;

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 24px;

  text-align: center;
  margin-bottom: 36px;
`;

export const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Part = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  &:nth-last-of-type(2n-1) {
    flex-direction: row-reverse;
  }
`;

export const Img = styled.img`
  width: 600px;
  height: 400px;

  object-fit: cover;
`;

export const Text = styled.p`
  font-size: 14px;

  color: ${color.primary.black}cc;
`;

export const Footer = styled.footer`
  padding: 20px 0;
  background-color: ${color.primary.black}cc;

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #ffffff;
`;

export const AddresLink = styled.a`
  font-style: normal;
  font-size: 14px;
  text-decoration: none;
  color: inherit;

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${color.primary.blue};
  }
`;

export const SocNet = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Item = styled.li``;

export const SocLink = styled.a`
  color: #ffffff;

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${color.primary.blue};
  }
`;

export const LinkFooter = styled.a``;

export const LogoImg = styled.img``;
