import Transition from "../complements/transition";
import { FaRegPaperPlane } from 'react-icons/fa'


function Complementary() {
    return ( 
        <Transition className= 'grid items-center min-w-[400px] px-4 py-8 md:py-44 md:px-36 md:grid-cols-2 bg-secondary font-quicksand'>
            <h3 className="max-w-xl text-4xl text-center font font-semibold text-white">Tenes un apartamento y queres rentarlo?</h3>
            <div className="mx-auto mt-5 ">
                <button className="flex gap-2 items-center justify-between text-white bg-black px-5 py-5 rounded-xl">
                    <FaRegPaperPlane/>
                    <span>Contactate con el area comercial</span>
                </button>
            </div>
        </Transition>
     );
}

export default Complementary;