import React, { useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll'; // Importa Element desde react-scroll
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Properties from './components/properties/propiedades';
import Services from './components/services/services';
import About from './components/about/About';
import TransitionPage from './components/transitionPage/transitionPage';
import Complementary from './components/complementario/complementarySection';
import Footer from './components/footer/footer';
import CardDetail from './components/Detail/Detail';
import AdminPanel from './components/admin/adminPanel';
import NavBar from './components/header/navbar';


// Importa el componente de ubicación de manera dinámica usando React.lazy
const LocationMap = React.lazy(() => import('./components/location/location'));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
              <Element name="home">
            <>
              <TransitionPage />
                <Header />
              <Banner />
              <Element name="apartments">
                <Properties />
              </Element>
              <Element name="services">
                <Services />
              </Element>
              <Suspense fallback={<div>Loading...</div>}>
                <Element name="location">
                  <LocationMap />
                </Element>
              </Suspense>
              <Element name="about">
                <About />
              </Element>
              <Complementary />
              <Footer />
            </>
        </Element>
          }
        />
        <Route path="/apartment/:id" element={<CardDetail/>}/>
        <Route path='/admin' element={
          <>
            <TransitionPage/>
            <Header/>
            <AdminPanel/>
          </>
        }/>
      </Routes>
    </>
  );
}

export default App;
