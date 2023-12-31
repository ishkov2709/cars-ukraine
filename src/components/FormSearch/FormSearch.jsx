import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button/Button';
import { Form } from './FormSearch.styled';
import PriceRange from './PriceRange/PriceRange';
import SelectGroup from './SelectGroup';
import { getAdverts } from '../../store/thunk';
import { useEffect } from 'react';
import { createArrayPrice } from '../../utils/createArrayPrice';
import { setMake, setPrice } from '../../store/rootSlice';
import { constants } from '../../constants/constants';
import { selectMake, selectPrice } from '../../store/selectors';

const FormSearch = ({ setPage }) => {
  const make = useSelector(selectMake);
  const price = useSelector(selectPrice);
  const dispatch = useDispatch();

  const handlePrice = value => {
    dispatch(setPrice(value));
  };

  const handleMake = value => {
    dispatch(setMake(value));
  };

  const handleSerach = () => {
    setPage(1);
    dispatch(getAdverts());
  };

  const handleEnter = ({ code }) => {
    if (code === 'Enter' || code === 'NumpadEnter') return handleSerach();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEnter);

    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  });

  return (
    <Form>
      <SelectGroup
        name="Car brand"
        placeholder={make ?? 'Enter the text'}
        width="224px"
        handler={handleMake}
        options={constants.optionsCar}
      />
      <SelectGroup
        name="Price/ 1 hour"
        placeholder={price ? '$' + price : 'To $'}
        width="125px"
        handler={handlePrice}
        options={createArrayPrice(1000)}
      />
      <PriceRange />
      <Button
        style={{ width: 136, height: 48, marginTop: '24px' }}
        onClick={handleSerach}
      >
        Search
      </Button>
    </Form>
  );
};

export default FormSearch;
