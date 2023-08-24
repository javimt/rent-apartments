import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartments, AdminDashboard } from "../pages/index";
import Contacts from "../components/Contacts";
import FilterRent from "../components/FilterRent";

const RoutesApp = () => {

  return (
    <div>
      <NavBar/>
      <Contacts />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apartments" element={<Apartments />} />
        <Route path="rent/:apartmentId" element={<FilterRent />} />
        <Route path="id:admin" element={<AdminDashboard />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesApp;
