import { createSlice } from "@reduxjs/toolkit";
// import { title } from 'process';
// utils
// import {axiosInstance as axios} from '../../utils/axios';;
//
import { dispatch } from "../store";
import axios from "axios";
import axiosInstance from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  isCelsius: true,
  error: null,
  data: null,
  message: "",
};

const slice = createSlice({
  name: "weather",
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
      state.data = action.payload;
      state.error = null;
    },

    celsiusChange(state, action) {
      state.isLoading = false;
      state.isCelsius = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { getWather, celsiusChange } = slice.actions;

// ----------------------------------------------------------------------

export function getWeatherByCity(city) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // console.log(
      //   `${process.env.REACT_APP_HOST_API_BASE}/weather?appid=68b401a5077c1e54536dd677136b2082&q=${city}`
      // );
      const response = await axiosInstance.post(
        `${process.env.REACT_APP_HOST_API_BASE}/weather?appid=68b401a5077c1e54536dd677136b2082&q=${city}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );

      if (response.data != null) {
        dispatch(slice.actions.getWather(response.data));
      } else {
        dispatch(slice.actions.hasError("No data Found"));
      }

      console.log(response.data.main.feels_like);
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
