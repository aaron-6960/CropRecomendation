import React, { useContext } from "react";
import "./weather.css";
import { useNavigate } from "react-router-dom";
import backgroundImage from "/src/pictures/weather.png";
import { FeaturesContext } from "../context/featuresContext";
import axios from "axios";


function Weather() {
  const navigate = useNavigate();

  const {
    temperature,
    setTemperature,
    humidity,
    setHumidity,
    rainfall,
    setRainfall,
    nitrogen,
    phosphorus,
    potassium,
    ph,
    crop,
    setCrop,
  } = useContext(FeaturesContext);

  const NextPage = async (e) => {
    e.preventDefault();

  const data = {
    N:nitrogen,
    P:phosphorus,
    K:potassium,
    ph,
    rainfall,
    humidity,
    temperature,
  };

    try {
      console.log(12)
      navigate('/crop');
      const res = await axios.post(
        import.meta.env.VITE_PREDICTION_API_URL,
        data
      );
      console.log(res.data)
      setCrop(res.data.prediction);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };


  const PreviousPage = (e) => {
    e.preventDefault();
    navigate("/chemicals");
  };

  return (
    <div
      className="Weather"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form onSubmit={NextPage}>
        <div className="inputs">
          <div className="temperature">
            <label>Temperature : </label>
            <br></br>
            <input
              className="TemperatureInput"
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div className="humidity">
            <label>Humidity : </label>
            <br></br>
            <input
              className="HumidityInput"
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
            />
          </div>
          <div className="rainfall">
            <label>Rainfall : </label>
            <br></br>
            <input
              className="RainfallInput"
              type="number"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
            />
          </div>
        </div>
        <div className="weather-buttons">
          <button onClick={PreviousPage} type="button" className="previous">
            Back
          </button>
          <button type="submit" className="previous">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Weather;
