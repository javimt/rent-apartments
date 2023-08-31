import { useEffect } from "react";
import apartmentImage1 from "../assets/apartament.jpg";
import apartmentImage2 from "../assets/panoramica.jpg";
import apartmentImage3 from "../assets/apartament.jpg";
import cityImage from "../assets/panoramica.jpg";
import styles from "../styles/Home.module.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Home = () => {
  const center = [6.2442, -75.5812];

  useEffect(() => {
    const map = L.map("map", {
      center,
      zoom: 12,
      zoomControl: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker(center).addTo(map);
    return () => map.remove();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentContainer}>
        <h1>Welcome to Furnished Apartments Medellín</h1>
        <p>Discover luxurious apartments for your stay in Medellín. Explore the beauty of the city and enjoy comfortable accommodations.</p>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel
          showThumbs={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000} 
          transitionTime={500}
          stopOnHover={true}
        >
          <div>
            <img src={apartmentImage1} alt="Apartment 1" />
          </div>
          <div>
            <img src={apartmentImage2} alt="Apartment 2" />
          </div>
          <div>
            <img src={apartmentImage3} alt="Apartment 3" />
          </div>
        </Carousel>
      </div>
      <br />
      <div id="map" className={styles.mapContainer}></div>
    </div>
  );
};

export default Home;
