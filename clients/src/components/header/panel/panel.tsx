import DropDown from './dropDown';
import styles from './header.module.css'



function FilterPanel() {
    return (
        <div className={`${styles.FilterPanelContainer} `}>
            <div className='row  h-100'>
                <div className='col-xl-4 d-flex col-md-4 col-sm-4 justify-content-center align-items-center'>
                    <DropDown type={'propiedad'} name={'Propiedad'} desc={'propiedades en venta'} options={['option1', 'option2', 'option3']} />
                </div>
                <div className='col-xl-4 d-flex col-md-4 col-sm-4 justify-content-center align-items-center'>
                    <DropDown type={'propiedad'} name={'Propiedad'} desc={'propiedades en venta'} options={['option1', 'option2', 'option3']} />
                </div>
                <div className='col-xl-4 d-flex col-md-4 col-sm-4 justify-content-center align-items-center'>
                    <DropDown type={'propiedad'} name={'Propiedad'} desc={'propiedades en venta'} options={['option1', 'option2', 'option3']} />
                </div>
            </div>
        </div>
    );
}

export default FilterPanel;