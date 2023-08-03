import Card from "../components/Card";
import image from "../assets/apartament.jpg";
import styles from "../styles/Apartaments.module.css";

const Apartaments = () => {
  return (
    <section className={styles.container}>
      <Card 
        image={image}
        rent="Rent"
        availability="Availability"
        price="$200us"
        ubication="Medellin"
        description="2 people max"
      />
      <Card 
        image={image}
        rent="Rent"
        availability="Availability"
        price="$250us"
        ubication="Laureles"
        description="4 people max"
      />
      <Card 
        image={image}
        rent="Rent"
        availability="Availability"
        price="$300us"
        ubication="Envigado"
        description="7 people max"
      />
      <Card 
        image={image}
        rent="Rent"
        availability="Availability"
        price="$500us"
        ubication="Poblado"
        description="2 people max"
      />
      <Card 
        image={image}
        rent="Rent"
        availability="Availability"
        price="$200us"
        ubication="Laureles"
        description="4 people max"
      />
      <Card 
        image={image}
        rent="Rent"
        availability="Availability"
        price="$350us"
        ubication="Envigado"
        description="7 people max"
      />
    </section>
  )
}

export default Apartaments;
