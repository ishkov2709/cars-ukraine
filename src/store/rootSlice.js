import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getAdverts, paginatePage } from './thunk';

const rootSlice = createSlice({
  name: 'root',
  initialState: initialState,
  reducers: {
    setPrice: (state, { payload }) => {
      state.filter = { ...state.filter, price: payload };
    },
    setMinMileage: (state, { payload }) => {
      state.filter = { ...state.filter, minMileage: payload };
    },
    setMaxMileage: (state, { payload }) => {
      state.filter = { ...state.filter, maxMileage: payload };
    },
    setMake: (state, { payload }) => {
      state.filter = { ...state.filter, make: payload };
    },
    addToFavorites: (state, { payload }) => {
      if (!state.favorites.find(({ id }) => id === payload.id)) {
        state.favorites = [...state.favorites, payload];
      }
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, state => {
        state.adverts = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.adverts = [...payload];
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(paginatePage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(paginatePage.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
      })
      .addCase(paginatePage.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const rootReducer = rootSlice.reducer;

export const {
  setPrice,
  setMinMileage,
  setMaxMileage,
  setMake,
  addToFavorites,
  removeFromFavorites,
} = rootSlice.actions;
