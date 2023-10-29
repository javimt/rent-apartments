import { useEffect, useState } from "react";
import { TbBusStop } from "react-icons/tb";
import styles from "../styles/Home.module.css";
import L from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import Carrousel from "../components/Carrousel";
import { useApartments } from "../ApartmenContext";
import image from "../assets/mapa-lineas-metroplus.png"

const Home = () => {
  const center = [6.18939, -75.57992];
  const {apartments} = useApartments();
  const [apartmentLocations, setApartmentLocations] = useState([]);
  const [images, setImages] = useState([]);
  
  const fetchImages = async () => {
    try {
      const apartmentImages = apartments.map((apartment) => ({
        url: apartment.images[0],
        key: apartment.id,
      }));
      setImages(apartmentImages);
      if (apartments.length === 0) {
        return "apartments not found";
      }
      const provider = new OpenStreetMapProvider();
      const apartmentLocations = await Promise.all(
        apartments.map(async (apartment) => {
          try {
            const results = await provider.search({ query: apartment.ubication });
            if (results.length > 0) {
              const { label, x, y } = results[0];
              return {
                id: apartment.id,
                name: apartment.apartmentNumber,
                address: label,
                lat: y,
                lon: x,
              };
            }
          } catch (error) {
            console.error(`Error geocoding address for apartment: ${apartment.apartmentNumber}`);
            return null;
          }
        })
      );
      const filteredLocations = apartmentLocations.filter((location) => location !== null);
      setApartmentLocations(filteredLocations);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchImages();
  }, [apartments]);

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

    apartmentLocations.forEach((apartment) => {
      L.marker([apartment.lat, apartment.lon])
        .addTo(map)
        .bindPopup(`<b>${apartment.name}</b>`)
        .openPopup();
    });
    return () => map.remove();
  }, [apartmentLocations]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.carousel}>
        <Carrousel images={images} />
      </div>
      <div className={`${styles.content} fadeIn`}>
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
        <i className={styles.stop}><TbBusStop /></i>
      <img src={image}  className={`${styles.Metro} scrollIn`} alt="furnished apartments medellin" />
      </div>
      <br />
      <div id="map" className={styles.mapContainer}></div>
    </div>
  );
};

export default Home;
