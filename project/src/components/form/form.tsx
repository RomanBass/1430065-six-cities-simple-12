import { useState, ChangeEvent, Fragment } from 'react';

const ratingList: {starNumber: number; type: string}[] = [
  {starNumber: 5, type: 'perfect'},
  {starNumber: 4, type: 'good'},
  {starNumber: 3, type: 'not bad'},
  {starNumber: 2, type: 'baddly'},
  {starNumber: 1, type: 'terribly'}
];

function Form(): JSX.Element {
  const [formData, setFormData] = useState({ rating: 0, review: '' });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeReview = (evt: ChangeEvent) => {
    setFormData({ ...formData, review: (evt.target as HTMLTextAreaElement).value });
  };

  // const checkStar = (rrr: number): void => {
  //   setFormData({ ...formData, rating: rrr });
  // };

  const renderStars = ratingList.map((ratingItem) =>
    (
      <Fragment key={ratingItem.starNumber}>
        <input
          checked={formData.rating === ratingItem.starNumber}
          onChange={() => {setFormData({ ...formData, rating: ratingItem.starNumber });}}
          className="form__rating-input visually-hidden"
          name="rating"
          value={ratingItem.starNumber}
          id={`${ratingItem.starNumber}-stars`}
          type="radio"
        />
        <label htmlFor={`${ratingItem.starNumber}-stars`} className="reviews__rating-label form__rating-label" title={ratingItem.type}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    ));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {renderStars}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default Form;
