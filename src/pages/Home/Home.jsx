import {
  AddresLink,
  Address,
  FeatureBox,
  Footer,
  HeroSec,
  Img,
  Item,
  LinkFooter,
  LinkTo,
  LogoImg,
  Part,
  SocLink,
  SocNet,
  Subtitle,
  Text,
  Title,
} from './Home.styled';
import Container from '../../components/common/Container';
import { Section } from '../Cars/Cars.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SiBmw } from 'react-icons/si';
import { SiSubaru } from 'react-icons/si';
import { SiVolvo } from 'react-icons/si';
import { SiMitsubishi } from 'react-icons/si';
import { SiNissan } from 'react-icons/si';
import { SiHyundai } from 'react-icons/si';
import { SiAudi } from 'react-icons/si';
import { SiMercedes } from 'react-icons/si';
import { SiChevrolet } from 'react-icons/si';
import { SiKia } from 'react-icons/si';
import { SiLandrover } from 'react-icons/si';
import { SiLamborghini } from 'react-icons/si';
import { IoLocationSharp } from 'react-icons/io5';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

import logo from '../../img/logo.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 1,
};

const Home = () => {
  return (
    <>
      <HeroSec id="hero">
        <Container>
          <Title>Embark on Adventures with Premium Car Rentals</Title>
          <LinkTo to="catalog">Go to Selection</LinkTo>
        </Container>
      </HeroSec>
      <Section style={{ margin: '0' }}>
        <Container>
          <Subtitle>Model Range</Subtitle>
          <Slider {...settings}>
            <SiBmw size={42} />
            <SiSubaru size={42} />
            <SiVolvo size={42} />
            <SiMitsubishi size={42} />
            <SiNissan size={42} />
            <SiHyundai size={42} />
            <SiAudi size={42} />
            <SiMercedes size={42} />
            <SiChevrolet size={42} />
            <SiKia size={42} />
            <SiLandrover size={42} />
            <SiLamborghini size={42} />
          </Slider>
        </Container>
      </Section>
      <Section style={{ margin: '0' }}>
        <Container>
          <Subtitle>Features</Subtitle>
          <FeatureBox>
            <Part>
              <Img
                src="https://www.shutterstock.com/image-photo/beautiful-man-standing-smiling-three-600nw-2263100009.jpg"
                alt="people"
                width={600}
              />
              <Text>
                A car rental website offers a diverse fleet, encompassing a wide
                range of models and categories. This ensures that customers can
                find the ideal vehicle for their specific needs, whether it's a
                fuel-efficient compact car for urban travel or a spacious SUV
                for family adventures. The variety in the vehicle selection
                caters to different preferences, allowing customers to choose a
                car that aligns with their style, size requirements, and the
                nature of their journey. Providing flexible rental terms, the
                website allows customers to customize their rental experience.
                This includes choosing the duration of the rental, selecting
                preferred payment methods, and opting for additional services
                such as GPS navigation or child seats. The flexibility in rental
                terms accommodates diverse customer needs, from short-term
                rentals for weekend getaways to long-term rentals for extended
                vacations or business trips.
              </Text>
            </Part>
            <Part>
              <Img
                src="https://img.freepik.com/premium-photo/family-are-choosing-new-car-showroom_85574-1202.jpg"
                alt="people"
                width={600}
              />
              <Text>
                Streamlining the reservation process, the website's online
                booking system offers customers a convenient and time-saving way
                to secure their desired vehicle. This user-friendly interface
                allows for quick and efficient bookings from the comfort of the
                customer's home or office. Online booking not only enhances
                convenience but also provides a centralized platform for
                customers to view vehicle availability, compare prices, and make
                informed decisions about their rental choices. The website
                adopts a transparent pricing structure, ensuring that customers
                are fully aware of the costs associated with their rental. Clear
                breakdowns of fees and charges eliminate surprises, fostering
                trust and allowing customers to plan their budgets with
                confidence. Transparent pricing contributes to a positive
                customer experience by promoting honesty and integrity in the
                rental process, ultimately leading to greater customer
                satisfaction and loyalty.
              </Text>
            </Part>
          </FeatureBox>
        </Container>
      </Section>
      <Footer>
        <Container>
          <LinkFooter href="#hero">
            <LogoImg src={logo} alt="logo" width={64} />
          </LinkFooter>
          <SocNet>
            <Item>
              <SocLink
                href="https://www.facebook.com"
                target="_blank"
                title="Facebook"
              >
                <FaFacebook size={22} />
              </SocLink>
            </Item>
            <Item>
              <SocLink
                href="https://www.instagram.com"
                target="_blank"
                title="Instagram"
              >
                <FaInstagram size={22} />
              </SocLink>
            </Item>
            <Item>
              <SocLink
                href="https://www.linkedin.com/in/dmitry-ishkov/"
                target="_blank"
                title="LinkedIn"
              >
                <FaLinkedin size={22} />
              </SocLink>
            </Item>
            <Item>
              <SocLink
                href="https://github.com/ishkov2709"
                target="_blank"
                title="GitHub"
              >
                <FaGithubSquare size={22} />
              </SocLink>
            </Item>
          </SocNet>
          <Address>
            <AddresLink
              href="https://maps.app.goo.gl/Kp4WXFr5WT4ZUNje9"
              target="_blank"
            >
              <IoLocationSharp size={16} style={{ marginRight: '8px' }} />7
              Karmanskoho street, Lviv, Lviv region, 79000
            </AddresLink>
            <AddresLink href="tel:+380730000000">
              <IoPhonePortraitOutline
                size={16}
                style={{ marginRight: '8px' }}
              />
              +380730000000
            </AddresLink>
          </Address>
        </Container>
      </Footer>
    </>
  );
};

export default Home;
