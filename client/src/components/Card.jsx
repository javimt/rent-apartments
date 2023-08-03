import styles from "../styles/Card.module.css";
import { Details } from "../pages";

const Card = ({image, description, price, ubication, availability, rent}) => {
  
  return (
    <article className={styles.card}>
      <img src={image} alt="apartament furnished" className={styles.image} />
      <div className={styles.details}>
        <button className={styles.ava}>{availability}</button>
        <button className={styles.rent}>{rent}</button>
        <p className={styles.price}>{price}</p>
        <p className={styles.ubication}>{ubication}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

export default Card;
