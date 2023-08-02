import styles from "../styles/Card.module.css";
import { Details } from "../pages";

const Card = ({image, description, price, ubication}) => {
  
  return (
    <article className={styles.card}>
      <img src={image} alt="apartament furnished" className={styles.image} />
      <div className={styles.details}>
        <button className={styles.ava}>Availability</button>
        <button className={styles.rent}>Rent</button>
        <p className={styles.price}>{price}</p>
        <p className={styles.ubication}>{ubication}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

export default Card;
