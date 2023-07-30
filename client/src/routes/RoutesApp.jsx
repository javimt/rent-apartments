import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Apartaments, Details, Landing } from "../pages/index";

const RoutesApp = () => {
  return (
    <div>
      {/* <Landing /> */}
      <NavBar />
      <Home />
      <About />
      <Apartaments />
      <Details />
      <Footer />
    </div>
  );
};

export default RoutesApp;
