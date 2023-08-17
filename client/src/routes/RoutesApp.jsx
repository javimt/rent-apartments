import { Routes, Route, Navigate } from "react-router-dom";
//import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartaments, Form } from "../pages/index";
import Contacts from "../components/Contacts";
//import AdminDashboard from "../components/AdminDashboard";

const RoutesApp = () => {

  return (
    <div>
      <NavBar/>
      <Contacts />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apartments" element={<Apartaments />} />
        <Route path="login" element={<Form/> } />
        <Route path="user" element={<Form /> } />
        {/* <Route
          path="admin"
          element={
            isAuthenticated ? (
              <AdminDashboard isAuthenticated={isAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesApp;
