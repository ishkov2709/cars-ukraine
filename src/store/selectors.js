export const selectFavorites = state => state.favorites;

export const selectModal = state => state.modal;

export const selectMake = state => state.filter.make;

export const selectPrice = state => state.filter.price;

export const selectMinMileage = state => state.filter.minMileage;

export const selectMaxMileage = state => state.filter.maxMileage;

export const selectAdverts = state => state.adverts;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;
