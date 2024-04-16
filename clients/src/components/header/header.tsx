import styles from './header.module.css'
import FilterPanel from './panel';


function Header() {
    return (
        <div className={`${styles.mainContainer} container mt-5 ` }>

            <div className={styles.textContainer}>
                <h1>Descubri tu propiedad ideal</h1>
                <p>con mas de 15 años en el rubro y mas de 200 apartamentos equipados</p>
            </div>
                <FilterPanel/>
            
        </div>
      );
}

export default Header;