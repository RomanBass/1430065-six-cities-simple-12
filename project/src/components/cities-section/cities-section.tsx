import { offers } from '../../mocks/offers';
import { useState } from 'react';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import SortingOptions from '../sorting-options/sorting-options';
import CardList from '../card-list/card-list';
import Map from '../map/map';

function CitiesSection(): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListCardHover = (listCardId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === listCardId);
    setSelectedOffer(currentOffer);
  };

  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const activeCity = useAppSelector((state) => state.activeCity);

  if (offersBySelectedCity && offersBySelectedCity.length > 0) {
    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersBySelectedCity.length} places to stay in {activeCity}</b>
            <SortingOptions />
            <div className="cities__places-list places__list tabs__content">
              <CardList setActiveCard={onListCardHover} propertyId={null} />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"><Map selectedOffer={selectedOffer} /></section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

export default CitiesSection;
