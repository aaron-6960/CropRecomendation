import React, { useEffect } from 'react';
import "./App.css"
import { Outlet, useNavigate } from 'react-router-dom';
import { FeaturesProvider } from './context/featuresContext';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <FeaturesProvider>
      <Outlet />
    </FeaturesProvider>
  );
}

export default App;
