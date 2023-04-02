import Card from '../card/card';
import {useAppSelector} from '../../hooks';

type CardListProps = {
  setActiveCard: (arg: number| null) => void;
  propertyId: number | null;
}

function CardList({setActiveCard, propertyId}: CardListProps): JSX.Element {
  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  let offersForList = offersBySelectedCity;

  if (propertyId) {
    offersForList = offersBySelectedCity.filter((offer) => offer.id !== propertyId);
  }

  const OffersList = offersForList.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard}/>);

  return (
    <div className="cities__places-list places__list tabs__content">{OffersList}</div>
  );
}

export default CardList;
