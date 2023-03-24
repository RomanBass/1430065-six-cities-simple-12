import { initialReviewData, fiveFoldMarkToPercentRatio, isoDateFilterParmeters } from './const';

export const convertMarkToPercents = (rating: number): string => `${rating * fiveFoldMarkToPercentRatio}%`;

export const convertJSDateToISO = (jsDate: string): string =>
  (new Date(jsDate)).toISOString().substring(isoDateFilterParmeters.CUT_TIME_INITIAL, isoDateFilterParmeters.CUT_TIME_FINAL);

export const convertJSDateToMothYear = (jsDate: string): string =>
  `${(new Date(jsDate)).toLocaleString('en', { month: 'long' })} ${(new Date(jsDate)).toISOString().substring(isoDateFilterParmeters.FILTER_DAY_INITIAL, isoDateFilterParmeters.FILTER_DAY_FINAL)}`;

export const isReviewCorrect = (review: string, reviewRating: number): boolean =>
  (reviewRating === initialReviewData.RATING ||
    review.length < initialReviewData.MIN_SYMBOLS ||
    review.length > initialReviewData.MAX_SYMBOLS);

