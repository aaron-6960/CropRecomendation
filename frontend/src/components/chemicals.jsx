import React, { useContext, useState } from 'react';
import './chemicals.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '/src/pictures/chemicals.png';
import { FeaturesContext } from '../context/featuresContext';

function Chemicals() {
  const navigate = useNavigate();

  const {
    nitrogen,
    setNitrogen,
    phosphorus,
    setPhosphorus,
    potassium,
    setPotassium,
    ph,
    setPh
  } = useContext(FeaturesContext);

  const [error, setError] = useState('');
  const [inputErrors, setInputErrors] = useState({
    nitrogen: false,
    phosphorus: false,
    potassium: false,
    ph: false
  });

  const handleNextPage = (e) => {
    e.preventDefault();
    const errors = {
      nitrogen: !nitrogen,
      phosphorus: !phosphorus,
      potassium: !potassium,
      ph: !ph
    };

    if (Object.values(errors).some(error => error)) {
      setInputErrors(errors);
      setError('Please input all the values.');
    } else {
      setInputErrors({
        nitrogen: false,
        phosphorus: false,
        potassium: false,
        ph: false
      });
      setError('');
      navigate('/weather');
    }
  };

  const handlePreviousPage = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div
      className="Chemicals"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form onSubmit={handleNextPage}>
        <div className="inputs">
          <div className="input-group">
            <label htmlFor="nitrogen">Nitrogen</label>
            <br />
            <input
              id="nitrogen"
              className={`NitrogenInput ${inputErrors.nitrogen ? 'error' : ''}`}
              type="number"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phosphorus">Phosphorus</label>
            <br />
            <input
              id="phosphorus"
              className={`PhosphorusInput ${inputErrors.phosphorus ? 'error' : ''}`}
              type="number"
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="potassium">Potassium</label>
            <br />
            <input
              id="potassium"
              className={`PotassiumInput ${inputErrors.potassium ? 'error' : ''}`}
              type="number"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="ph">pH</label>
            <br />
            <input
              id="ph"
              className={`PhInput ${inputErrors.ph ? 'error' : ''}`}
              type="number"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
            />
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="chemicals-buttons">
          <button className="previous" onClick={handlePreviousPage} type="button">
            Back
          </button>
          <button className="next" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chemicals;
