import CardList from '../../components/card-list/card-list';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/cities-list/cities-list';
import { offers } from '../../mocks/offers';
import {useState} from 'react';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import { useAppSelector } from '../../hooks';
import SortingOptions from '../../components/sorting-options/sorting-options';

function Main(): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListCardHover = (listCardId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === listCardId);
    setSelectedOffer(currentOffer);
  };

  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <div className="page page--gray page--main">
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
      <Tabs />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersBySelectedCity.length} places to stay in {activeCity}</b>
              <SortingOptions/>
              <div className="cities__places-list places__list tabs__content">
                <CardList setActiveCard={onListCardHover} propertyId={null}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"><Map selectedOffer={selectedOffer}/></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
