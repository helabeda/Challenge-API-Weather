import {WEATHER_LOAD, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from "../constants/weatherActionType";


const initialState = {
    Weather: [],
    isLoading: false,
    error: null,
  };
  
  export const weather = (state = initialState, { type, payload }) => {
    switch (type) {
      case WEATHER_LOAD:
        return { ...state, isLoading: true };
      case GET_WEATHER_SUCCESS:
        return { ...state, Weather: payload, isLoading: false };
      case GET_WEATHER_FAIL:
        return { ...state, error: payload, isLoading: false };
      default:
        return state;
    }
  };