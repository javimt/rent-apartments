import React, { useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './global.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Properties from './components/properties/propiedades';
import Services from './components/services/services';

// Importa el componente de ubicación de manera dinámica usando React.lazy
const LocationMap = React.lazy(() => import('./components/location/location'));

function App() {


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <Properties />
              <Services />
              <Suspense fallback={<div>Loading...</div>}>
                {LocationMap && <LocationMap />}
              </Suspense>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
