import { useSelector } from 'react-redux';
import CarItem from '../../components/CarItem/CarItem';
import Container from '../../components/common/Container';
import { List, Section } from '../Cars/Cars.styled';
import { selectFavorites } from '../../store/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Section>
      <Container>
        {favorites.length > 0 && (
          <List>
            {favorites.map(el => {
              return <CarItem key={el.id} info={el} />;
            })}
          </List>
        )}
      </Container>
    </Section>
  );
};

export default Favorites;
