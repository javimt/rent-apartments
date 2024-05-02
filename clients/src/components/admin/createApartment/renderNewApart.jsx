import Transition from "../../complements/transition";
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaRulerSolid } from 'react-icons/lia'



function RenderNewApartSection({ input }) {
    const { images, urbanizacion, bathrooms, bedrooms, size, description, status } = input
    return (
        <Transition className="flex flex-col items-center h-full shadow-2xl rounded-lg xl:mx-auto p-1 font-quicksand">
            <div>
                <p className="text-gray-400 text-center">preview apartment</p>
            </div>
            <div className="py-5 text-gray-400 font-bold text-xl w-[400px]">
                <h2>{urbanizacion ? urbanizacion : 'Title Here'}</h2>
            </div>
            <div className="flex flex-col justify-center mt-2">
                <div className="w-[400px] h-[250px]  bg-cover bg-center rounded-lg object-fill relative border" style={{ backgroundImage: `url(${images && images[0] ? images[0] : 'https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg'})` }}>
                    <div className={`w-[50px] p-1 px-2 rounded absolute top-0 right-0 text-white ${status == 'rent' ? 'bg-green-400' : 'bg-red-400'}`}>
                        <span>{status}</span>
                    </div>
                </div>
                <div className="flex gap-2 justify-center">
                    <div className="flex w-[50px] px-2 my-2 py-1 rounded-lg bg-slate-300/30">
                        <LiaBathSolid />
                        <span className="ml-2 text-xs block">
                            {bathrooms}
                        </span>
                    </div>
                    <div className="flex w-[50px] px-2 my-2 py-1 rounded-lg bg-slate-300/30">
                        <LiaBedSolid />
                        <span className="ml-2 text-xs block">
                            {bedrooms}
                        </span>
                    </div>
                    <div className="flex w-[50px] px-2 my-2 py-1 rounded-lg bg-slate-300/30">
                        <LiaRulerCombinedSolid />
                        <span className="ml-2 text-xs block">
                            {size}
                        </span>
                    </div>
                </div>
                <div>
                    <span className="text-xs  my-2 block text-gray-400 font-extralight">Description:</span>
                    <p className="text-xs text-gray-400 ">{description ? description : 'description here....'}</p>

                </div>

            </div>
        </Transition>
    );
}

export default RenderNewApartSection;