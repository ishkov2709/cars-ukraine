import { useDispatch, useSelector } from 'react-redux';
import { Name } from '../FormSearch.styled';
import { Input, Wrapper, Box } from './PriceRange.styled';
import { setMaxMileage, setMinMileage } from '../../../store/rootSlice';
import { selectMaxMileage, selectMinMileage } from '../../../store/selectors';

const PriceRange = () => {
  const minMileage = useSelector(selectMinMileage);
  const maxMileage = useSelector(selectMaxMileage);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Name>Car mileage / km</Name>
      <Box>
        <Input
          placeholder="From"
          value={minMileage === null ? '' : minMileage}
          onChange={({ target }) => {
            const inputValue = target.value.replace(/[^0-9]/g, '');
            dispatch(
              setMinMileage(
                new Intl.NumberFormat('en-US').format(
                  Number(inputValue.toLocaleString('en-US'))
                )
              )
            );
          }}
        />
        <Input
          placeholder="To"
          value={maxMileage === null ? '' : maxMileage}
          onChange={({ target }) => {
            const inputValue = target.value.replace(/[^0-9]/g, '');
            dispatch(
              setMaxMileage(
                new Intl.NumberFormat('en-US').format(
                  Number(inputValue.toLocaleString('en-US'))
                )
              )
            );
          }}
        />
      </Box>
    </Wrapper>
  );
};

export default PriceRange;
