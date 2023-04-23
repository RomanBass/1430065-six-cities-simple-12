import Card from '../card/card';
import {useAppSelector} from '../../hooks';
import { sliceParameterToDuplicateArray } from '../../const';

type CardListProps = {
  setActiveCard: (arg: number| null) => void;
  propertyId: number | null;
}

function CardList({setActiveCard, propertyId}: CardListProps): JSX.Element {
  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const activeSortingOption = useAppSelector((state) => state.activeSortingOption);
  let offersForList = offersBySelectedCity.slice(sliceParameterToDuplicateArray);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);

  if (propertyId) {
    offersForList = nearbyOffers;
  }

  if (activeSortingOption === 'Price: high to low') {
    offersForList.sort((a,b) => b.price - a.price);
  }

  if (activeSortingOption === 'Price: low to high') {
    offersForList.sort((a,b) => a.price - b.price);
  }

  if (activeSortingOption === 'Top rated first') {
    offersForList.sort((a,b) => b.rating - a.rating);
  }

  const OffersList = offersForList.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard}/>);

  return (
    <div className="cities__places-list places__list tabs__content">{OffersList}</div>
  );
}

export default CardList;
