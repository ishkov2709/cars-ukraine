import { useSelector } from 'react-redux';
import CarItem from '../../components/CarItem/CarItem';
import Container from '../../components/common/Container';
import { EmptyData, List, Section } from '../Cars/Cars.styled';
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
        {favorites.length === 0 && (
          <EmptyData>The list of chosen cars is empty</EmptyData>
        )}
      </Container>
    </Section>
  );
};

export default Favorites;
