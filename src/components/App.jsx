import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import RestictedRoute from './RestictedRoute';
import { selectAuthIsloading } from 'redux/authSelector';
import { refreshUserThunk } from 'redux/authSlice';
import PrivateRoute from './PrivateRoute';
import Loader from './Loader';
import { StyledAppContainer } from './App.styled';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/homePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];
const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsloading);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <StyledAppContainer>

      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                {appRoutes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Route>
            </Routes>
          </Suspense>
        </>
      )}
    </StyledAppContainer>
  );
};

export default App;
