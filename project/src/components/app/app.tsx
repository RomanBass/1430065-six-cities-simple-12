import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../not-found/not-found';
import { Reviews } from '../../types/review';
import { useAppSelector } from '../../hooks';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  reviews: Reviews;
}

function App({ reviews }: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.UnKnown) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Property offers={offers} reviews={reviews} />} />
          <Route path={AppRoute.WrongPath} element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export default App;
