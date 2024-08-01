import React, { createContext, useState } from "react";
export const FeaturesContext = createContext();

export const FeaturesProvider = ({ children }) => {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [ph, setPh] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [crop,setCrop] = useState("")
  return (
    <FeaturesContext.Provider
      value={{
        nitrogen,
        setNitrogen,
        phosphorus,
        setPhosphorus,
        potassium,
        setPotassium,
        ph,
        setPh,
        temperature,
        setTemperature,
        humidity,
        setHumidity,
        rainfall,
        setRainfall,
        crop,
        setCrop,
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};
