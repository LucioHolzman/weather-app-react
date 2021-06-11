import React, {useState} from "react";
import "./response.scss";
const Response = ({ result: { name, main, sys, cod, weather} }) => {
    
  
  return (
    <>
      <div className="response">
        <div className="title">
          {name === undefined ? <h2>Wheater</h2> : <h2>Wheater in {name}</h2>}
        </div>
        {
        cod === 200 ? (
          <div className="card">
            <div className="left-card">
              <h3>
                {name}, {sys.country}
              </h3>
              <div className="text">
                <h4>Temp: {main.temp} </h4>
                <span>&#x2103;</span>
              </div>
              <div className="text">
                <h4>Temp max: {main.temp_max} </h4>
                <span>&#x2103;</span>
              </div>
              <div className="text">
                <h4>Temp min: {main.temp_min} </h4>
                <span>&#x2103;</span>
              </div>
              <div className="text">
                <h4>Humidity: {main.humidity}%</h4>
              </div>
            </div>
            <div className="right-card">
                <div className="description-img">
                    {weather[0].description}
                </div>
              <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
            </div>
          </div>
        ) : (
          <div className="container-error">
            <h3>City not found</h3>
          </div>
        )
        }
      </div>
    </>
  );
};

export default Response;
