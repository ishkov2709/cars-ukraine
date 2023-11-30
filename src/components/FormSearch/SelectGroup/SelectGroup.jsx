import { useState } from 'react';
import Select from 'react-select';
import { color } from '../../../styles/colors';
import { Box, Stub, Wrapper } from './SelectGroup.styled';
import { Name } from '../FormSearch.styled';

const options = [
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land' },
];

const SelectGroup = ({ name = '', placeholder = '', width = '200px' }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Box>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: 'transparent',
              backgroundColor: color.primary.white,
              color: color.primary.black,
              height: 48,
              width: width,
              boxShadow: 'none',
              borderRadius: 14,
              padding: '0 16px',
            }),
            dropdownIndicator: (baseStyles, state) => ({
              ...baseStyles,
              color: color.primary.black,
              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 250ms linear',
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontSize: '18px',
              color: color.primary.black,
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontSize: '16px',
              color: `${color.primary.black}33`,
              borderRadius: 14,
              overflow: 'hidden',
            }),
          }}
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder={placeholder}
        />
        <Stub />
      </Box>
    </Wrapper>
  );
};

export default SelectGroup;
