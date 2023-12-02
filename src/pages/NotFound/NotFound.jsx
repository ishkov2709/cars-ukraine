import Container from '../../components/common/Container';
import { Section } from '../Cars/Cars.styled';
import { LinkTo } from '../Home/Home.styled';
import { Error, Message } from './NotFound.styled';
import { FaTools } from 'react-icons/fa';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Error>404</Error>
        <Message>
          Sorry, the page not found <FaTools />
        </Message>
        <LinkTo to="/">Go back to the main page</LinkTo>
      </Container>
    </Section>
  );
};

export default NotFound;
