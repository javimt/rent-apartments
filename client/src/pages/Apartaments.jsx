import Card from "../components/Card";
import image from "../assets/apartament.jpg";
import styles from "../styles/Apartaments.module.css";

const Apartaments = () => {
  return (
    <section className={styles.container}>
      <Card 
        image={image}
        price="$1000us"
        description="beautiful furnished apartament ubicated in the center of the city"
      />
      <Card 
        image={image}
        price="$1000us"
        description="beautiful furnished apartament ubicated in the center of the city"
      />
      <Card 
        image={image}
        price="$1000us"
        description="beautiful furnished apartament ubicated in the center of the city"
      />
    </section>
  )
}

export default Apartaments
