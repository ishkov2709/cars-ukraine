import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import { lazy } from 'react';

const Cars = lazy(() => import('./pages/Cars'));
const Favorites = lazy(() => import('./pages/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Cars />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
