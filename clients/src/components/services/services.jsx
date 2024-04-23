import useGetApartments from "../../hooks/GetApartments";
import Transition from "../banner/floatedSearch/transition";
import Slider from "./slider";




function Services() {
    
    return (
        <Transition className='grid  px-4 md:py-20 md:px-36  font-quicksand xl:grid-cols-2 md:gap-28'>
            <div className="max-w-[100%]  mb-2 flex justify-center flex-col md:px-20">
                <h4 className="text-secondary font-semibold ">Services</h4>
                <h2 className='my-4 text-3xl font-semibold'>Consigue los mejores apartamentos amoblados, unidades modernas y seguras. Sabemos lo que buscas al precio que necesitas</h2>
                <p className="mb-1 mt-7 text-secondary text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In error quisquam sit vero natus repellat adipisci velit explicabo provident reprehenderit cum beatae quis ipsam, aliquam sapiente inventore quibusdam veniam. Alias.</p>
            </div>
            <div className=' flex gap-2 justify-center  items-center  '>
                
                 <Slider/>
                
            </div>
        </Transition>
    );
}

export default Services;