import React, { useEffect, useState } from 'react'
import './wheather.css'

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [city , setCity ]= useState("karachi")
    const [search , mySearch]= useState("Karachi")




    const ApiKey ="7c45d8b085858b71f7f0ea60597e3f8b"
    useEffect( () =>{
        
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${ApiKey}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          setWeatherData(result);
        })
        .catch((err) => {
          console.log("0rrr", err);
        });
    }, [city])

  return (
    <>
    <div className="container-fluid main">
        <div className='wheather'>
          <div className="input">
              <input type="search" placeholder='Search' className="search"
              value={search}
              onChange={(e)=>{
                  mySearch(setCity)
                  mySearch(e.target.value)
              }} />
          </div>

          {
              !search ?
              (<p>Not FOUND</p>):(

             <>
          <div className="heading">
          <i className="fa fa-street-view"></i>
              <p>{weatherData && weatherData.name}</p>
          </div>
          <div className="decription">
              <h1>{weatherData && weatherData.description}</h1>
          </div>
          <div className="temp">
              <h3>Temp : {weatherData && weatherData.main && weatherData.main.temp}</h3>
              <h3>Condition : {weatherData && weatherData.weather && weatherData.weather[0] &&weatherData.weather[0].main}</h3>
        <h3>
            Min : {weatherData && weatherData.main && weatherData.main.temp_min}
        </h3> 
        <h3>
            Max : {weatherData && weatherData.main && weatherData.main.temp_max}
        </h3>
        
          </div>
          </>
     )}
        </div>
    </div>
    
    </>
  )
}

export default Weather
