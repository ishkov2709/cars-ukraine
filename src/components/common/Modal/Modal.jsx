import {
  Accent,
  Backdrop,
  CloseBtn,
  Condition,
  ConditionBox,
  Description,
  Img,
  Info,
  InfoPart,
  Link,
  ModalBox,
  Subtitle,
  Title,
} from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal } from '../../../store/selectors';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { closeModal } from '../../../store/rootSlice';
import { IoMdClose } from 'react-icons/io';
import { color } from '../../../styles/colors';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  const modal = useSelector(selectModal);
  const {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = modal;
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  });

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  });

  const handleClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  const [country, city] = address.split(', ').reverse().slice(0, 2);

  const [minAge] = rentalConditions.split('\n');

  return createPortal(
    <Backdrop onClick={handleClose}>
      <ModalBox>
        <CloseBtn onClick={() => dispatch(closeModal())}>
          <IoMdClose size={24} color={color.primary.black} />
        </CloseBtn>
        <Img src={img} width={461} />
        <Title>
          {make} <Accent>{model}</Accent>, {year}
        </Title>
        <Info>
          <InfoPart>
            {city} | {country} | Id: {id} | Year: {year} | Type: {type}
          </InfoPart>
          <InfoPart>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </InfoPart>
        </Info>
        <Description>{description}</Description>
        <Subtitle>Accessories and functionalities:</Subtitle>
        <Info>
          <InfoPart>{accessories.join(' | ')}</InfoPart>
          <InfoPart>{functionalities.join(' | ')}</InfoPart>
        </Info>
        <Subtitle>Rental Conditions:</Subtitle>
        <ConditionBox>
          <Condition>
            Minimum age : <Accent>{minAge.match(/\d/g).join('')}</Accent>
          </Condition>
          {rentalConditions
            .split('\n')
            .slice(1, rentalConditions.split('\n').length)
            .map((el, i) => (
              <Condition key={i}>{el}</Condition>
            ))}
          <Condition>
            Mileage: <Accent>{mileage}</Accent>
          </Condition>
          <Condition>
            Price: <Accent>{rentalPrice.replace('$', '') + '$'}</Accent>
          </Condition>
        </ConditionBox>
        <Link href="tel:+380730000000">Rental car</Link>
      </ModalBox>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
