import { createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city: string) => ({payload: city}));

export const fillOffers = createAction('fillOffers', (city: string) => ({payload: city}));

export const changeSortingOption =
createAction('changeSortingOption', (sortingOption: string) => ({payload: sortingOption}));

export const sortOffers =
createAction('sortOffers', (sortingOption: string) => ({payload: sortingOption}));
