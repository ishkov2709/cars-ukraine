import { Img, Nav, NavigLink, Wrapper } from './Header.styled';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Img src={logo} width={128} />
        </Link>
        <Nav>
          <NavigLink to="/">Home</NavigLink>
          <NavigLink to="/cars">Cars</NavigLink>
          <NavigLink to="/choice">Your Choice</NavigLink>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Header;
