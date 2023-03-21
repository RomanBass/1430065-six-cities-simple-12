import Card from '../card/card';
import { Offers } from '../../types/offer';

type CardListProps = {
  offers: Offers;
  setActiveCard: (arg: number| null) => void;
}

function CardList({offers, setActiveCard}: CardListProps): JSX.Element {
  const OffersList = offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard}/>);
  return (
    <div className="cities__places-list places__list tabs__content">{OffersList}</div>
  );
}

export default CardList;
