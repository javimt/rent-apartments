import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartments, AdminDashboard, Details } from "../pages/index";
import Contacts from "../components/Contacts";
import FilterRent from "../components/FilterRent";
import { useTheme } from "../components/ThemeProvider";
import SaleCard from "../components/SaleCard";

const RoutesApp = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <NavBar/>
      <Contacts />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apartments/rent" element={<Apartments />} />
        <Route path="apartments/sale" element={<SaleCard />} /> 
        <Route path="/:id/details" element={<Details />} />
        <Route path="rent/:apartmentId" element={<FilterRent />} />
        <Route path="admin" element={<AdminDashboard />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesApp;
