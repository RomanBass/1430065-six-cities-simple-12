import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'Nice place.',
    date: 'Sun Mar 24 2022 13:13:13 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Alex',
    },
  },
  {
    comment: 'Not bad place.',
    date: 'Tue Mar 29 2022 22:26:12 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-ben.jpg',
      id: 2,
      isPro: true,
      name: 'Ben',
    },
  },
];
