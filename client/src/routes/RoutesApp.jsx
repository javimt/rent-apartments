import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartaments, Form } from "../pages/index";
import Contacts from "../components/Contacts";
import AdminDashboard from "../components/AdminDashboard";

const RoutesApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuthentication();
  }, []);

  return (
    <div>
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Contacts />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apartments" element={<Apartaments />} />
        <Route
          path="login"
          element={
            <Form
              isRegisterMode={false}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="register"
          element={
            <Form
              isRegisterMode={true}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="admin"
          element={
            isAuthenticated ? (
              <AdminDashboard isAuthenticated={isAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesApp;
