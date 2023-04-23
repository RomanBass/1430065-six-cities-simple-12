import { sliceParameterToDuplicateArray } from '../../const';
import { Reviews } from '../../types/review';
import ReviewItem from '../review/review';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewsForList = reviews.slice(sliceParameterToDuplicateArray);
  reviewsForList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const reviewsList = reviewsForList.map((review) => <ReviewItem key={review.id} review={review}/>);

  return (
    <ul className="reviews__list">{reviewsList}</ul>
  );
}

export default ReviewsList;
