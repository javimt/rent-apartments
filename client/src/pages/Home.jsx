import { useEffect, useState } from "react";
import { FaWifi } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { TbBusStop } from "react-icons/tb";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Carrousel from "../components/Carrousel";
import axios from "axios";

const Home = () => {
  const center = [6.2442, -75.5812];
  const [images, setImages] = useState([]); 
  
  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/apartment");
      const apartments = response.data;
      const apartmentImages = apartments.map((apartment) => ({
        url: apartment.images[0],
        key: apartment.id, 
      }));
      setImages(apartmentImages);
      if (response.data.length === 0) {
        return "apartments not found";
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const map = L.map("map", {
      center,
      zoom: 12,
      zoomControl: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker(center).addTo(map);
    return () => map.remove();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.carousel}>
        <Carrousel images={images} key={images.id}/>
      </div>
      <div className={styles.content}>
        <h2>Welcome to Furnished Apartments Medellín</h2>
        <br />
        <p className={styles.subtitle}>Your Home Away From Home</p>
        <br />
        <div className={styles.ad}>
          <p>Special Offer: 10% off your first booking!</p>
        </div>
      </div>
      <br />
      <div className={styles.text}>
        <p className={styles.p}>
          Discover luxurious apartments for your stay in Medellín. Explore the beauty of the city and enjoy comfortable accommodations.
        </p> 
      </div>
      <div className={styles.features}>
        <i className="fas fa-wifi"><FaWifi /></i>
        <i className="fas fa-swimming-pool"><MdPool /></i>
        <i className="fas fa-car"><TbBusStop /></i>
      </div>
      <br />
      <div id="map" className={styles.mapContainer}></div>
    </div>
  );
};

export default Home;
