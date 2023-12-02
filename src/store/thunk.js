import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const toNumber = str => {
  let numbers = str.match(/\d+/g);
  let res = numbers ? numbers.join('') : '';
  return Number(res);
};

axios.defaults.baseURL = 'https://6568c8d69927836bd9756a5b.mockapi.io/api';

const limit = 12;

export const getAdverts = createAsyncThunk(
  'adverts/all',
  async (_, thunkAPI) => {
    const {
      filter: { make, price, minMileage, maxMileage },
    } = thunkAPI.getState();
    const params = {
      page: 1,
      limit,
      filter: make,
    };
    try {
      const { data } = await axios.get('/adverts', { params });
      if (data.length === 0) throw new Error('No result found');
      let filteredData = [...data];
      if (price) {
        const arr = [...filteredData].filter(
          el => toNumber(el.rentalPrice) <= price
        );
        filteredData = [...arr];
      }

      if (minMileage && minMileage !== '0') {
        const arr = [...filteredData].filter(
          el => el.mileage >= toNumber(minMileage)
        );
        filteredData = [...arr];
      }
      if (maxMileage && maxMileage !== '0') {
        const arr = [...filteredData].filter(
          el => el.mileage <= toNumber(maxMileage)
        );
        filteredData = [...arr];
      }
      return filteredData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const paginatePage = createAsyncThunk(
  'adverts/paginate',
  async (page, thunkAPI) => {
    const {
      filter: { make, price, minMileage, maxMileage },
    } = thunkAPI.getState();
    const params = {
      page,
      limit,
      filter: make,
    };
    try {
      const { data } = await axios.get('/adverts', { params });
      if (data.length === 0) throw new Error('No result found');
      let filteredData = [...data];
      if (price) {
        const arr = [...filteredData].filter(
          el => toNumber(el.rentalPrice) <= price
        );
        filteredData = [...arr];
      }

      if (minMileage) {
        const arr = [...filteredData].filter(
          el => el.mileage >= toNumber(minMileage)
        );
        filteredData = [...arr];
      }
      if (maxMileage) {
        const arr = [...filteredData].filter(
          el => el.mileage <= toNumber(maxMileage)
        );
        filteredData = [...arr];
      }
      return filteredData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
