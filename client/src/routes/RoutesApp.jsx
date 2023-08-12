import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartaments, Form } from "../pages/index";
import Contacts from "../components/Contacts";

const RoutesApp = () => {
  return (
    <div>
      <NavBar />
      <Contacts />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apartments" element={<Apartaments />} />
        <Route path="login" element={<Form isRegisterMode={false} />} />
        <Route path="register" element={<Form isRegisterMode={true} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesApp;
