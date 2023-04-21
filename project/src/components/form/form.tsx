import { useState, ChangeEvent, Fragment, FormEvent } from 'react';
import { ratingList, initialReviewData, AuthorizationStatus } from '../../const';
import { isReviewCorrect } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { uploadReviewAction } from '../../store/api-actions';

type FormProps = {
  id: number;
}

function Form({id}: FormProps): JSX.Element | null {
  const [formData, setFormData] = useState({ rating: initialReviewData.RATING, review: initialReviewData.REVIEW });
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

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

  const onSubmitClick = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(uploadReviewAction({id: id, comment: formData.review, rating: formData.rating }));
  };

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
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={onSubmitClick}
          disabled={isReviewCorrect(formData.review, formData.rating)}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
