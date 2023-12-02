import logo from '../../img/logo.png';
import Container from '../common/Container';
import { Link, useLocation } from 'react-router-dom';
import { Img, Nav, NavigLink, Wrapper } from './Header.styled';

const Header = () => {
  const location = useLocation();

  return (
    <Wrapper currentpath={location.pathname.replace('/', '')}>
      <Container>
        <Link to="/">
          <Img src={logo} width={64} />
        </Link>
        <Nav>
          <NavigLink to="/">Home</NavigLink>
          <NavigLink to="/catalog">Cars</NavigLink>
          <NavigLink to="/favorites">Your Choice</NavigLink>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Header;
