import { createSlice } from '@reduxjs/toolkit';
// import { title } from 'process';
// utils
// import {axiosInstance as axios} from '../../utils/axios';;
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  isCelsius:true,
  error: null,
  data: [],

  message: '',  
};

const slice = createSlice({
  name: 'groupweather',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET BOOKS
    getWather(state, action) {
      state.isLoading = false;
      state.books = action.payload;
    },

    celsiusChange(state, action) {
        state.isLoading = false;
        state.isCelsius = action.payload;
    }

  },
});

// Reducer
export default slice.reducer;

// Actions
export const { getWather, celsiusChange } = slice.actions;

// ----------------------------------------------------------------------

export function getWeatherByCity(acno, id, token) {
  console.log(`accession no to issue ${acno}`);
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
    //   dispatch(slice.actions.issueBooks());
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function convertToCelsius() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
    //   dispatch(slice.actions.getIssuedBooksData());
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function convertToFarehnite() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
    //   dispatch(slice.actions.getIssuedBooksData());
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
