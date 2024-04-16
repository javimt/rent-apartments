import useHandleShow from '../../hooks/handleShowHook';
import styles from './navBar.module.css';
import { BsTelephone } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";

function NavBar() {
    const { show, toogleHandleShow } = useHandleShow()

    return (
        <nav className="navbar navbar-expand-lg  container">
            <div className="container">
                <a className={`${styles.companyName} navbar-brand`}  href="#">RentApart</a>
                <div className={`${styles.smallScreen} navbar-nav ms-auto mb-2 mb-lg-0   `}>
                    <span className='navbar-text fs-7'>+54 11-2542-0570 <BsTelephone className={styles.telephoneIcon} /></span>
                </div>
                <button onClick={toogleHandleShow} className="navbar-toggler" type="button"  data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="border-none"><RiMenu3Line/></span>
                </button>

                <div className={`${show ? 'show' : ''} collapse navbar-collapse `} id="navbarText">
                    <ul className={`${styles.smallScreenLinks} navbar-nav mx-auto mb-2 mb-lg-0`}>
                        <li className="nav-item px-3 text-center">
                            <a className="nav-link active text-secondary" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-secondary" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-secondary" href="#">Pricing</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-secondary" href="#">Servicios</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-secondary" href="#">Localizacion</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-secondary" href="#">Propiedades</a>
                        </li>
                    </ul>

                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;
