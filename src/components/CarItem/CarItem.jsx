import { useDispatch, useSelector } from 'react-redux';
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
  Skeleton,
} from './CarItem.styled';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import {
  addToFavorites,
  openModal,
  removeFromFavorites,
} from '../../store/rootSlice';
import { selectFavorites } from '../../store/selectors';
import { color } from '../../styles/colors';
import { useState } from 'react';

const CarItem = ({ info }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = info;

  const handleAdd = () => {
    dispatch(addToFavorites(info));
  };

  const handleRemove = () => {
    dispatch(removeFromFavorites(id));
  };

  const handleOpenModal = () => {
    dispatch(openModal(info));
  };

  const [country, city] = address.split(', ').reverse().slice(0, 2);
  return (
    <Wrapper>
      <Img
        src={img}
        width={274}
        alt="car"
        isloaded={isLoaded.toString()}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <Skeleton />}
      <BrandAndPriceBox>
        <BrandYear>
          {make}, {year}
        </BrandYear>
        <Price>{rentalPrice}</Price>
      </BrandAndPriceBox>
      <OtherInfo>
        <Info>{city}</Info>
        <Info>{country}</Info>
        <Info>{rentalCompany}</Info>
        <Info>{type}</Info>
        <Info>{model}</Info>
        <Info>{id}</Info>
        <Info>{functionalities[0]}</Info>
      </OtherInfo>
      <Button
        style={{ width: '100%', height: 44, borderRadius: '12px' }}
        onClick={handleOpenModal}
      >
        Learn more
      </Button>

      {favorites.find(el => el.id === id) ? (
        <FavBtn>
          <FaHeart
            onClick={handleRemove}
            color={color.primary.blue}
            size={18}
          />
        </FavBtn>
      ) : (
        <FavBtn>
          <FaRegHeart onClick={handleAdd} color="#ffffff" size={18} />
        </FavBtn>
      )}
    </Wrapper>
  );
};

export default CarItem;
