import React, { useEffect, useState} from 'react';
//import {Link } from "react-router-dom";
import {getWeather} from "../../redux/actions/weatherAction"
import { useDispatch,  useSelector} from 'react-redux';
import WeatherCard from "./WeatherCard";
import './weather.css'

const Weather = () => {
  const dispatch = useDispatch();
  const cityWeather = useSelector((state) => state.weather.Weather);
  console.log(cityWeather);
  const loading = useSelector((state) => state.weather.isLoading);
  const [search, setSearch] = useState("Gafsa");
  const [query, setQuery] = useState("Gafsa");
  const handleSubmit = (e) =>{
    e.preventDefault();
    setQuery(search)
  }

  useEffect(() => {
    if(query.length>=3){
    dispatch(getWeather(query));}  
  }, [query]);

  return (
    <div className="weather">
      {loading ? (
        <div>
          <h3>Loading</h3> 
        </div>
      ) : (
        <div>
          <div>
            <h2 className="search">Enter your position</h2>
            <form onSubmit={handleSubmit} className="inputSearch">
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            />
            </form>
          </div>
         {<WeatherCard cityWeather={cityWeather}/>} 
        </div>
      )}
      
    </div>
  );
};

export default Weather
