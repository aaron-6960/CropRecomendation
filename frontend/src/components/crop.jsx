import React, { useContext } from "react";
import "./crop.css";
import { useNavigate } from "react-router-dom";
import { FeaturesContext } from "../context/featuresContext";

// Import all images
import appleImage from "../pictures/apple.png";
import bananaImage from "../pictures/banana.jpg";
import blackgramImage from "../pictures/blackgram.png";
import chickpeaImage from "../pictures/chickpea.png";
import coconutImage from "../pictures/coconut.png";
import coffeeImage from "../pictures/coffee.png";
import cottonImage from "../pictures/cotton.png";
import grapesImage from "../pictures/grapes.png";
import juteImage from "../pictures/jute.png";
import kidneybeansImage from "../pictures/kidneybeans.png";
import lentilImage from "../pictures/lentil.png";
import maizeImage from "../pictures/maize.png";
import mangoImage from "../pictures/mango.png";
import mothbeansImage from "../pictures/mothbeans.png";
import mungbeansImage from "../pictures/mungbeans.png";
import muskmelonImage from "../pictures/muskmelon.png";
import orangeImage from "../pictures/orange.png";
import papayaImage from "../pictures/papaya.png";
import pigeonpeasImage from "../pictures/pigeonpeas.png";
import pomegranateImage from "../pictures/pomegranate.png";
import riceImage from "../pictures/rice.png";
import watermelonImage from "../pictures/watermelon.png";

function Crop() {
  const navigate = useNavigate();
  const { crop } = useContext(FeaturesContext);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  // Map crop types to imported images
  const cropImages = {
    apple: appleImage,
    banana: bananaImage,
    blackgram: blackgramImage,
    chickpea: chickpeaImage,
    coconut: coconutImage,
    coffee: coffeeImage,
    cotton: cottonImage,
    grapes: grapesImage,
    jute: juteImage,
    kidneybeans: kidneybeansImage,
    lentil: lentilImage,
    maize: maizeImage,
    mango: mangoImage,
    mothbeans: mothbeansImage,
    mungbeans: mungbeansImage,
    muskmelon: muskmelonImage,
    orange: orangeImage,
    papaya: papayaImage,
    pigeonpeas: pigeonpeasImage,
    pomegranate: pomegranateImage,
    rice: riceImage,
    watermelon: watermelonImage,
  };

  // Get the image based on the crop type
  const backgroundImage = cropImages[crop];

  return (
    <div
      className="Crop"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="CropHeading">
        <button onClick={submitHandler} className="ReturnHomeButton">
          Return To Home
        </button>
      </div>
    </div>
  );
}

export default Crop;
