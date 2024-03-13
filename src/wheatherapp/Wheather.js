// src/Weather.js
import React, { useState } from 'react';

const API_KEY = '7f0da0c669cd2da76a04d89e15affbae';

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className="weather">
      <input
        type="text"
        className="search"
        placeholder="Search for a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
