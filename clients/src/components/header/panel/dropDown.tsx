import useHandleShow from '../../../hooks/handleShowHook';
import styles from './header.module.css'

interface propsType {
    type: 'propiedad' | 'localizacion' | 'rango',
    options: string[], 
    name: 'Localizacion' | 'Propiedad' | 'Rango de Precio', 
    desc: string
}


function DropDown({type, options, name, desc}: propsType) {

    const { toogleHandleShow , show} = useHandleShow()

    return (

        <div onClick={toogleHandleShow} className={`${styles.dropdowmMainContainer} dropdown`}>
            <div className="d-flex align-items-center btn  dropdown-toggle  "  data-bs-toggle="dropdown" aria-expanded="false">
                <div  className=" me-1 ">
                    <p className={styles.dropDownTitle}>{desc}</p>
                    <p className={styles.dropDownDescription}>{name}</p>

                </div>
            </div>
            <ul className={`dropdown-menu w-100 ${show ? 'show' : ''}`}>
                {options.map((option, index) => {
                    return <li key={index}><button className="dropdown-item text-center" value={option} name={option}>{option}</button></li>
                })}
               
            </ul>
        </div>
    );
}

export default DropDown;