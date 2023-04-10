import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../not-found/not-found';
import { Reviews } from '../../types/review';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  reviews: Reviews;
}

function App({reviews }: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Offer} element={<Property offers={offers} reviews={reviews}/>}/>
        <Route path={AppRoute.WrongPath} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
