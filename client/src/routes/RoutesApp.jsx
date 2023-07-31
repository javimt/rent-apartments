import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartaments, Details, Landing } from "../pages/index";
import Contacts from "../components/Contacts";

const RoutesApp = () => {
  return (
    <div>
      <NavBar />
      <Contacts />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apartaments" element={<Apartaments />} />
        <Route path="details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesApp;
