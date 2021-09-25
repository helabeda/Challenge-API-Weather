import React from 'react'

function WeatherCard({cityWeather}) {
    return (
        <div className="container">
            <div className="card">
                <div className="content">
                <img src={cityWeather.current&&cityWeather.current.condition.icon} alt="weather"/>
                <h1>{cityWeather.current&&cityWeather.current.condition.text}</h1>
                <h1 className="temp">{cityWeather.current&&cityWeather.current.condition&&cityWeather.current.temp_c}<span className="celsius"><sup>&deg;</sup>c</span></h1>
                <h1 className="city">{cityWeather.location&&cityWeather.location.name}</h1>
                <h1>{cityWeather.forecast&&cityWeather.forecast.forecast}</h1>
            </div>
        </div>
    </div>
    )
}

export default WeatherCard
