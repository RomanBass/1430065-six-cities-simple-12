export enum AppRoute {
  Login = '/login',
  Root = '/',
  WrongPath = '*',
  Offer = 'offer/:id'
}

export const ratingList: { starNumber: number; type: string }[] = [
  { starNumber: 5, type: 'perfect' },
  { starNumber: 4, type: 'good' },
  { starNumber: 3, type: 'not bad' },
  { starNumber: 2, type: 'baddly' },
  { starNumber: 1, type: 'terribly' }
];

export const initialReviewData = {
  RATING: 0,
  REVIEW: '',
  MIN_SYMBOLS: 50,
  MAX_SYMBOLS: 300,
};

export const fiveFoldMarkToPercentRatio = 20;

export const isoDateFilterParmeters = {
  CUT_TIME_INITIAL: 0,
  CUT_TIME_FINAL: 10,
  FILTER_DAY_INITIAL: 8,
  FILTER_DAY_FINAL: 10,
};
