import "./App.css";
import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FeaturesProvider } from "./context/featuresContext";

function App() {
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    {
    console.log(location.pathname)
    navigate(location.pathname);
    }
  }, [navigate]);

  return (
    <>
      <FeaturesProvider>
        <Outlet />
      </FeaturesProvider>
    </>
  );
}

export default App;
