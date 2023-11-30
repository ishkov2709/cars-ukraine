import Button from '../common/Button';
import {
  Img,
  Info,
  BrandYear,
  BrandAndPriceBox,
  OtherInfo,
  Price,
  Wrapper,
  FavBtn,
} from './CarItem.styled';
import { FaRegHeart } from 'react-icons/fa';

const CarItem = ({
  url,
  brand,
  year,
  price,
  city,
  country,
  grade,
  model,
  id,
  feature,
}) => {
  return (
    <Wrapper>
      <Img src={url} width={274} alt="car" />
      <BrandAndPriceBox>
        <BrandYear>
          {brand}, {year}
        </BrandYear>
        <Price>{price}</Price>
      </BrandAndPriceBox>
      <OtherInfo>
        <Info>{city}</Info>
        <Info>{country}</Info>
        <Info>{grade}</Info>
        <Info>{model}</Info>
        <Info>{id}</Info>
        <Info>{feature}</Info>
      </OtherInfo>
      <Button style={{ width: '100%', height: 44, borderRadius: '12px' }}>
        Learn more
      </Button>

      <FavBtn>
        <FaRegHeart color="#ffffff" size={18} />
      </FavBtn>
    </Wrapper>
  );
};

export default CarItem;
