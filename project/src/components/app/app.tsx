import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../not-found/not-found';

type AppScreenProps = {
  rentalOffersNumber: number;
}

function App({ rentalOffersNumber }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main rentalOffersNumber={rentalOffersNumber} />}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Offer} element={<Property/>}/>
        <Route path={AppRoute.WrongPath} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
