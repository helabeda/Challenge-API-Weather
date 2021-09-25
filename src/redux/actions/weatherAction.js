import {WEATHER_LOAD, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from "../constants/weatherActionType";
import axios from "axios";

export const getWeather = (query) => async (dispatch) => {
  dispatch({ type: WEATHER_LOAD });
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=72d299fb582741ef93412120210609&q=${query}=1&aqi=no&alerts=no`);
    dispatch({ type: GET_WEATHER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_FAIL, payload: error });
  }
};