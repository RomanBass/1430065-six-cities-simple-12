import { createReducer } from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offer';
import { changeCity, fillOffers, changeSortingOption, sortOffers,
  setSortingMenuVisibility, loadOffers, setDataLoadingStatus, requireAuthorization,
  getUserData, loadParticularOffer, setParticularOfferLoadingStatus,
  loadNearbyOffers, loadReviews, setReviewUploadingStatus, setError } from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/review';

type InitialState = {
  activeCity: string;
  offersList: Offers;
  activeSortingOption: string;
  isSortingMenuVisible: boolean;
  offers: Offers;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  particularOffer: Offer | null;
  isParticularOfferLoading: boolean;
  nearbyOffers: Offers;
  reviews: Reviews;
  isReviewUploading: boolean;
  error: string | null;
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
  particularOffer: null,
  isParticularOfferLoading: true,
  nearbyOffers: [],
  reviews: [],
  isReviewUploading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersList = state.offers.filter((offer) => offer.city.name === initialState.activeCity);
    })
    .addCase(loadParticularOffer, (state, action) => {
      state.particularOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setParticularOfferLoadingStatus, (state, action) => {
      state.isParticularOfferLoading = action.payload;
    })
    .addCase(setReviewUploadingStatus, (state, action) => {
      state.isReviewUploading = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
