import Logo from '../../components/logo/logo';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import CitiesSection from '../../components/cities-section/cities-section';
import { emptyOffersArrayLength } from '../../const';

function Main(): JSX.Element {

  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  // const isSortingMenuVisible = useAppSelector((state) => state.isSortingMenuVisible);
  // const dispatch = useAppDispatch();

  return (
    <div className="page page--gray page--main"
      // onClick={(evt) => {
      //   evt.stopPropagation();
      //   if (isSortingMenuVisible) {dispatch(setSortingMenuVisibility());}
      // }}
    // eslint-disable-next-line react/jsx-closing-bracket-location
    >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
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
