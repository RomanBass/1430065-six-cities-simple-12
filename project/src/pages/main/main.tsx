import Logo from '../../components/logo/logo';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import CitiesSection from '../../components/cities-section/cities-section';
import { emptyOffersArrayLength } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import SigningArea from '../../components/sign-area/sign-area';

function Main(): JSX.Element {

  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <SigningArea/>
            </nav>
          </div>
        </div>
      </header>
      <CitiesList />
      <main className={`page__main page__main--index
      ${offersBySelectedCity && offersBySelectedCity.length === emptyOffersArrayLength
      ? 'page__main--index-empty'
      : ''}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesSection/>
      </main>
    </div>
  );
}

export default Main;
