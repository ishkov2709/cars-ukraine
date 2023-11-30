import CarItem from '../../components/CarItem/CarItem';
import FormSearch from '../../components/FormSearch';
import Container from '../../components/common/Container';
import { Section } from './Cars.styled';

const Cars = () => {
  return (
    <Section>
      <Container>
        <FormSearch />
        <CarItem
          url="https://s.auto.drom.ru/i24283/c/photos/fullsize/mitsubishi/outlander/mitsubishi_outlander_1146548.jpg"
          brand="Mitsubishi"
          year="2010"
          price="$30"
          city="Lviv"
          country="Ukraine"
          grade="City Car Rentals"
          model="Outlander"
          id="9591"
          feature="Power liftgate"
        />
      </Container>
    </Section>
  );
};

export default Cars;
