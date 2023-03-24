import { useState, ChangeEvent, Fragment } from 'react';
import { ratingList, initialReviewData } from '../../const';
import { isReviewCorrect } from '../../utils';

function Form(): JSX.Element {
  const [formData, setFormData] = useState({ rating: initialReviewData.RATING, review: initialReviewData.REVIEW });

  const changeReview = (evt: ChangeEvent) => {
    setFormData({ ...formData, review: (evt.target as HTMLTextAreaElement).value });
  };

  const checkStar = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: +(evt.target as HTMLInputElement).value });
  };

  const renderStars = (
    <div className="reviews__rating-form form__rating" onChange={checkStar}>
      {
        ratingList.map((ratingItem) => (
          <Fragment key={ratingItem.starNumber}>
            <input
              checked={formData.rating === ratingItem.starNumber}

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
        ))
      }
    </div>
  );

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      {renderStars}

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={changeReview}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isReviewCorrect(formData.review, formData.rating)}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
