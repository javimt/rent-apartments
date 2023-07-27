import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartaments, Details, Landing } from "../pages/index";

const RoutesApp = () => {
  return (
    <div>
      {/* <Landing /> */}
      <NavBar />
      <div id="/">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="apartaments">
        <Apartaments />
      </div>
      <div id="details">
        <Details />
      </div>
      <Footer />
    </div>
  );
};

export default RoutesApp;
