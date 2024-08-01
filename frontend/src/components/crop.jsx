import React, { useContext } from 'react';
import './crop.css';
import { useNavigate } from 'react-router-dom'; 
import { FeaturesContext } from "../context/featuresContext";



function Crop() {
  
    const navigate = useNavigate();  

    const {
      crop,
    } = useContext(FeaturesContext);

    const submitHandler = (e) => {
        e.preventDefault();  
        navigate('/home');  
    };

    return (
        <div className="Crop">
            <div className="CropHeading">
                {crop}
                <br></br>
                <button onClick={submitHandler}>Return To Home</button>
            </div>
        </div>
    );
}

export default Crop;
