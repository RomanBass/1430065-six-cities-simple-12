import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { changeCity, fillOffers, changeSortingOption, sortOffers,
  setSortingMenuVisibility, loadOffers, setDataLoadingStatus, requireAuthorization, getUserData } from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

type InitialState = {
  activeCity: string;
  offersList: Offers;
  activeSortingOption: string;
  isSortingMenuVisible: boolean;
  offers: Offers;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: InitialState = {
  activeCity: 'Paris',
  offersList: [],
  activeSortingOption: 'Popular',
  isSortingMenuVisible: false,
  offers: [],
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.UnKnown,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersList = state.offers.filter((offer) => offer.city.name === initialState.activeCity);
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offersList = state.offers.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(changeSortingOption, (state, action) => {
      state.activeSortingOption = action.payload;
      state.isSortingMenuVisible = false;
    })
    .addCase(sortOffers, (state, action) => {
      state.activeSortingOption = action.payload;
    })
    .addCase(setSortingMenuVisibility, (state) => {
      state.isSortingMenuVisible = !state.isSortingMenuVisible;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });

});

export { reducer };
