import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/main/property/property';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../const';

type AppScreenProps = {
  placesNumber: number;
}

function App({ placesNumber }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesNumber={placesNumber} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />

        <Route
          path={AppRoute.Room}
          element={<Property />}
        />


        <Route
          path={AppRoute.NotFound}
          element={<NotFound />}
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
