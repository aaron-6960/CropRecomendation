import React, { useContext, useState } from "react";
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

  const [error, setError] = useState('');
  const [inputErrors, setInputErrors] = useState({
    temperature: false,
    humidity: false,
    rainfall: false
  });

  const NextPage = async (e) => {
    e.preventDefault();

    const errors = {
      temperature: !temperature,
      humidity: !humidity,
      rainfall: !rainfall
    };

    if (Object.values(errors).some(error => error)) {
      setInputErrors(errors);
      setError('Please input all the values.');
      return;
    } else {
      setInputErrors({
        temperature: false,
        humidity: false,
        rainfall: false
      });
      setError('');
    }

    const data = {
      N: nitrogen,
      P: phosphorus,
      K: potassium,
      ph,
      rainfall,
      humidity,
      temperature,
    };

    try {
      const res = await axios.post(
        import.meta.env.VITE_PREDICTION_API_URL,
        data
      );
      setCrop(res.data.prediction);
      navigate('/crop');
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
            <br />
            <input
              className={`TemperatureInput ${inputErrors.temperature ? 'error' : ''}`}
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div className="humidity">
            <label>Humidity : </label>
            <br />
            <input
              className={`HumidityInput ${inputErrors.humidity ? 'error' : ''}`}
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
            />
          </div>
          <div className="rainfall">
            <label>Rainfall : </label>
            <br />
            <input
              className={`RainfallInput ${inputErrors.rainfall ? 'error' : ''}`}
              type="number"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
            />
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="weather-buttons">
          <button onClick={PreviousPage} type="button" className="previous">
            Back
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Weather;
