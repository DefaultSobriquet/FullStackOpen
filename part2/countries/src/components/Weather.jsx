import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Weather = ({country}) => {
    
    const url = 
        "https://api.openweathermap.org/data/2.5/weather"+
        `?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    const [weatherData, setWeatherData] = useState({waiting: true});

    const getWeather = () => {
        axios.get(url).then(
            response => {
                setWeatherData(response.data)
            }
        ).catch(err => alert(err));
    }

    useEffect(getWeather, [url]);

    if(weatherData.waiting) return <p>Retrieving weather information...</p>;

    return <>
        <h2>Weather in {country.name.common}</h2>
        <p>Temperature {weatherData.main.temp} Celsius</p>
        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}>
        </img>
        <p>Wind {weatherData.wind.speed} m/s</p>
    </>;
}

export default Weather;