import { useDispatch, useSelector } from 'react-redux';
import CarItem from '../../components/CarItem/CarItem';
import FormSearch from '../../components/FormSearch';
import Container from '../../components/common/Container';
import { List, MoreBtn, Section } from './Cars.styled';
import { useEffect, useState } from 'react';
import { getAdverts, paginatePage } from '../../store/thunk';

const Cars = () => {
  const adverts = useSelector(state => state.adverts);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  useEffect(() => {
    page > 1 && dispatch(paginatePage(page));
  }, [page, dispatch]);

  const handlePaginate = () => {
    setPage(prevState => (prevState = prevState + 1));
  };

  return (
    <Section>
      <Container>
        <FormSearch setPage={setPage} />
        {adverts.length > 0 && (
          <List>
            {adverts.map(el => {
              return <CarItem key={el.id} info={el} />;
            })}
          </List>
        )}
        {adverts.length > 0 && !isLoading && !error && (
          <MoreBtn onClick={handlePaginate}>Load more</MoreBtn>
        )}
      </Container>
    </Section>
  );
};

export default Cars;
