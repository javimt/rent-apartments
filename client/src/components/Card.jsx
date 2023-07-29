import styles from "../styles/Card.module.css";

const Card = ({image, description, price}) => {
  return (
    <article className={styles.card}>
      <img src={image} alt="apartament furnished" className={styles.image} />
      <div className={styles.details}>
        <p className={styles.price}>{price}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

export default Card;
