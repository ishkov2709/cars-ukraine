import Button from '../common/Button/Button';
import { Form } from './FormSearch.styled';
import PriceRange from './PriceRange/PriceRange';
import SelectGroup from './SelectGroup';

const FormSearch = () => {
  return (
    <Form>
      <SelectGroup
        name="Car brand"
        placeholder="Enter the text"
        width="224px"
      />
      <SelectGroup name="Price/ 1 hour" placeholder="To $" width="125px" />
      <PriceRange />
      <Button
        style={{ width: 136, height: 48, marginTop: '24px' }}
        onClick={() => console.log('hi')}
      >
        Search
      </Button>
    </Form>
  );
};

export default FormSearch;
