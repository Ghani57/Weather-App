 import React, { useEffect, useState } from 'react';
import './WeatherApp.css';

const Temp = () => {
    const [city, setCity] =useState('');
    const [search, setSearch] = useState("London");

    useEffect( () => {
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
};
fetchApi();
    },[search]
    )
    return (
        <>
        <div className="Main_div">
        <br />
            <div className="header">Weather App <br />
            Developed by: Firecracker</div>
            <br />
            <input type="search"
            value={search}
             className="input_Field"
             placeholder="Type a city/country name"
             onChange={ (eventHandler) => { setSearch(eventHandler.target.value) } }
             />
         <div className="info">
                <h2 className="Location">
                <i class="fas fa-street-view"></i> {search}
                </h2>
                </div>
             {!city ? (
                 <h3>No data found!</h3>
             ) : (
                 <div>
                <h1 className="Temp"> {city.temp} <sup>o</sup>C</h1>
                <h3 className="Min_Max">
                    Min {city.temp_min} <sup>o</sup>C |
                Max {city.temp_max} <sup>o</sup>C
                </h3>
                <div className="wave_one"></div>
            <div className="wave_two"></div>
            <div className="wave_three"></div>
            </div>
             )
             }
             </div>
             </>
    );
}

export default Temp;