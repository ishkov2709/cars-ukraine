import { useState } from 'react';
import Select from 'react-select';
import { color } from '../../../styles/colors';
import { Box, Stub, Wrapper } from './SelectGroup.styled';
import { Name } from '../FormSearch.styled';

const SelectGroup = ({
  name = '',
  placeholder = '',
  width = '200px',
  handler,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOption = selectedOption => {
    setSelectedOption(selectedOption);
    handler(selectedOption.value);
  };

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
              padding: '14px 8px 14px 18px',
            }),
            multiValueLabel: {
              color: '#000000',
            },
          }}
          value={selectedOption}
          onChange={handleOption}
          options={options}
          placeholder={placeholder}
        />
        <Stub />
      </Box>
    </Wrapper>
  );
};

export default SelectGroup;
