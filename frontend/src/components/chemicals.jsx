import React, { useContext } from 'react';
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

  const NextPage = (e) => {
    e.preventDefault();
    navigate('/weather');
  };

  const PreviousPage = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div
      className="Chemicals"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form onSubmit={NextPage}>
        <div className="inputs">
          <div className="nitrogen">
            <label>Nitrogen</label>
            <br></br>
            <input
              className="NitrogenInput"
              type="number"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
            />
          </div>
          <div className="phosphorus">
            <label>Phosphorus</label>
            <br></br>
            <input
              className="PhosphorusInput"
              type="number"
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
            />
          </div>
          <div className="potassium">
            <label>Potassium</label>
            <br></br>
            <input
              className="PotassiumInput"
              type="number"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
            />
          </div>
          <div className="ph">
            <label>pH</label>
            <br></br>
            <input
              className="PhInput"
              type="number"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
            />
          </div>
        </div>
        <div className="chemicals-buttons">
          <button className="previous" onClick={PreviousPage} type='button'>
            Back
          </button>
          <button className="next" type='submit'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chemicals;
