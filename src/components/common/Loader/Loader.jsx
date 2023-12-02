import { InfinitySpin } from 'react-loader-spinner';
import { color } from '../../../styles/colors';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <InfinitySpin width="200" color={color.primary.blue} />
    </Wrapper>
  );
};

export default Loader;
