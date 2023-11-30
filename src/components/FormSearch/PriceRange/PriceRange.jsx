import { Name } from '../FormSearch.styled';
import { Input, Wrapper, Box } from './PriceRange.styled';

const PriceRange = () => {
  return (
    <Wrapper>
      <Name>Сar mileage / km</Name>
      <Box>
        <Input placeholder="From" />
        <Input placeholder="To" />
      </Box>
    </Wrapper>
  );
};

export default PriceRange;
