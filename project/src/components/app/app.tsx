import Main from '../../pages/main/main';

type AppScreenProps = {
  placesNumber: number;
}

function App({placesNumber}: AppScreenProps): JSX.Element {
  return (
    <Main placesNumber={placesNumber}/>

  );
}

export default App;
