import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { convertMarkToPercents } from '../../utils';

type CardProps = {
  offer: Offer;
  setActiveCard: (arg: number | null) => void;
}

function Card({ offer, setActiveCard }: CardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => setActiveCard(offer.id)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${(offer.id).toString()}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: convertMarkToPercents(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${(offer.id).toString()}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
