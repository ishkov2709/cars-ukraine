import { useSelector } from 'react-redux';
import { selectModal } from '../../store/selectors';
import Modal from '../common/Modal';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../common/Loader/Loader';

const SharedLayout = () => {
  const modal = useSelector(selectModal);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {modal && <Modal />}
    </>
  );
};

export default SharedLayout;
