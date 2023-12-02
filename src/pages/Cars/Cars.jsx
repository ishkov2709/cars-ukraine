import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from '../../store/selectors';
import Loader from '../../components/common/Loader/Loader';
import CarItem from '../../components/CarItem/CarItem';
import Container from '../../components/common/Container';
import FormSearch from '../../components/FormSearch';
import { FaSadCry } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts, paginatePage } from '../../store/thunk';
import { EmptyData, List, MoreBtn, Section } from './Cars.styled';

const Cars = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
        {isLoading && <Loader />}
        {adverts.length > 0 && !isLoading && (
          <List>
            {adverts.map(el => {
              return <CarItem key={el.id} info={el} />;
            })}
          </List>
        )}
        {adverts.length > 0 && !isLoading && !error && (
          <MoreBtn onClick={handlePaginate}>Load more</MoreBtn>
        )}
        {adverts.length === 0 && !isLoading && (
          <EmptyData>
            No results found for your query{' '}
            <FaSadCry size={26} style={{ marginLeft: '8px' }} />
          </EmptyData>
        )}
      </Container>
    </Section>
  );
};

export default Cars;
