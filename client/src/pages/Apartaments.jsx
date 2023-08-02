import Card from "../components/Card";
import image from "../assets/apartament.jpg";
import styles from "../styles/Apartaments.module.css";

const Apartaments = () => {
  return (
    <section className={styles.container}>
      <Card 
        image={image}
        price="$1000us"
        ubication="Medellin"
        description="2 people max"
      />
      <Card 
        image={image}
        price="$1000us"
        ubication="Laureles"
        description="4 people max"
      />
      <Card 
        image={image}
        price="$1000us"
        ubication="Envigado"
        description="7 people max"
      />
      <Card 
        image={image}
        price="$1000us"
        ubication="Medellin"
        description="2 people max"
      />
      <Card 
        image={image}
        price="$1000us"
        ubication="Laureles"
        description="4 people max"
      />
      <Card 
        image={image}
        price="$1000us"
        ubication="Envigado"
        description="7 people max"
      />
    </section>
  )
}

export default Apartaments;
