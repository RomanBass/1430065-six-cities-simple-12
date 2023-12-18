import Property from '../../pages/main/property/property';

type AppScreenProps = {
  placesNumber: number;
}

function App({placesNumber}: AppScreenProps): JSX.Element {
  return (
    <Property/>
  );
}

export default App;
