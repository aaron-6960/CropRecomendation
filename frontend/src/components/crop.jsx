import React, { useContext } from 'react';
import './crop.css';
import { useNavigate } from 'react-router-dom'; 
import { FeaturesContext } from "../context/featuresContext";

function Crop() {
  const navigate = useNavigate();  

  const { crop } = useContext(FeaturesContext);

  const submitHandler = (e) => {
    e.preventDefault();  
    navigate('/home');  
  };

  let backgroundImage;
  switch (crop) {
    case 'apple':
      backgroundImage = '/src/pictures/apple.png';
      break;
    case 'banana':
      backgroundImage = '/src/pictures/banana.jpg';
      break;
    case 'blackgram':
      backgroundImage = '/src/pictures/blackgram.png';
      break;
    case 'chickpea':
      backgroundImage = '/src/pictures/chickpea.png';
      break;
    case 'coconut':
      backgroundImage = '/src/pictures/coconut.png';
      break;
    case 'coffee':
      backgroundImage = '/src/pictures/coffee.png';
      break;
    case 'cotton':
      backgroundImage = '/src/pictures/cotton.png';
      break;
    case 'grapes':
      backgroundImage = '/src/pictures/grapes.png';
      break;
    case 'jute':
      backgroundImage = '/src/pictures/jute.png';
      break;
    case 'kidneybeans':
      backgroundImage = '/src/pictures/kidneybeans.png';
      break;
    case 'lentil':
      backgroundImage = '/src/pictures/lentil.png';
      break;
    case 'maize':
      backgroundImage = '/src/pictures/maize.png';
      break;
    case 'mango':
      backgroundImage = '/src/pictures/mango.png';
      break;
    case 'mothbeans':
      backgroundImage = '/src/pictures/mothbeans.png';
      break;
    case 'mungbeans':
      backgroundImage = '/src/pictures/mungbeans.png';
      break;
    case 'muskmelon':
      backgroundImage = '/src/pictures/muskmelon.png';
      break;
    case 'orange':
      backgroundImage = '/src/pictures/orange.png';
      break;
    case 'papaya':
      backgroundImage = '/src/pictures/papaya.png';
      break;
    case 'pigeonpeas':
      backgroundImage = '/src/pictures/pigeonpeas.png';
      break;
    case 'pomegranate':
      backgroundImage = '/src/pictures/pomegranate.png';
      break;
    case 'rice':
      backgroundImage = '/src/pictures/rice.png';
      break;
    case 'watermelon':
      backgroundImage = '/src/pictures/watermelon.png';
      break;
  }

  return (
    <div className="Crop" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="CropHeading">
        <button onClick={submitHandler} className='ReturnHomeButton'>Return To Home</button>
      </div>
    </div>
  );
}

export default Crop;
