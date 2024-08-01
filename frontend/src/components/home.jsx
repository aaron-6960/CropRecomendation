import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom'; 
import backgroundImage from '/src/pictures/home.png';

function Home() {
  const navigate = useNavigate();  

  const submitHandler = (e) => {
    e.preventDefault();  
    navigate('/chemicals');  
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <button className="home-button" onClick={submitHandler}>Find Crop</button>
      </div>
    </div>


  );
}

export default Home;
