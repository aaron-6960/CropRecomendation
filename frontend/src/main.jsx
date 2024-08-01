import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import Chemicals from './components/chemicals';
import Weather from './components/weather';
import Crop from './components/crop';
import App from './App';
import './index.css';


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "chemicals", element: <Chemicals /> },
      { path: "weather", element: <Weather /> },
      { path: "crop", element: <Crop /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
