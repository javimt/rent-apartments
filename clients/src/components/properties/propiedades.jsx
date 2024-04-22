import useGetApartments from "../../hooks/GetApartments";
import Transition from "../banner/floatedSearch/transition";
import { Link } from 'react-router-dom'
import { LiaStarSolid, LiaCommentsDollarSolid, LiaBedSolid, LiaBathSolid, LiaRulerCombinedSolid } from 'react-icons/lia'
import { parseToDollarsMoney } from "../../utils/parseMoney";
import useCounterHouses from "../../redux/actions/counterHauses";


function Properties() {

    const { apartments, length } = useGetApartments()
    const { counter, handleCounter } = useCounterHouses()

    return (
        <Transition className={'px-4 mb-0 ms:mt-0 mt-[300px] md:mt-20  md:px-40'}>
            <div className="grid grid-cols-2 gap-2 md:gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    apartments && apartments.map(({
                        availability,
                        bathrooms,
                        bedrooms,
                        description,
                        id,
                        images,
                        lat,
                        lon,
                        name,
                        price,
                        size,
                        status,
                        ubication,
                        userId }, index) => {
                        return (
                        
                            index < counter &&
                            <Link className="shadow-light hover:shadow-xl font-quicksand rounded-2xl transition-all duration-300 cursor-pointer" key={id} to={`/properties/${id}`}>
                                <div className="relative -z-[1]">
                                    <div className="relative">
                                        <div className="absolute text-secondary flex items-center px-2 rounded-lg bg-slate-50 top-2 right-2">
                                            <LiaStarSolid />
                                            <span className=" text-sm ml-1 font-semibold py-1">4.1</span>
                                        </div>
                                        <img src={images[0]} alt="" className="object-cover w-full max-h-full h-[280px] rounded-t-2xl" />
                                        <div className="px-3 py-5">
                                            <p className="text-secondary">{ubication}</p>
                                            <div className="">
                                                <div className="flex">
                                                    <LiaCommentsDollarSolid className="mr-2 text-green-800" />
                                                    <p className=" font-bold">{parseToDollarsMoney(price)}</p>
                                                </div>
                                                <div className="gap-4 mt-2 lg:flex">
                                                    <div className="flex items-center justify-center px-2 my-2 py-1 rounded-lg bg-slate-300/30">
                                                        <LiaBedSolid />
                                                        <span className="ml-2 text-xs">{bedrooms}</span>
                                                    </div>
                                                    <div className="flex items-center justify-center px-2 my-2 py-1 rounded-lg bg-slate-300/30">
                                                        <LiaBathSolid />
                                                        <span className="ml-2 text-xs">{bathrooms}</span>
                                                    </div>
                                                    <div className="flex items-center justify-center px-2 my-2 py-1 rounded-lg bg-slate-300/30">
                                                        <LiaRulerCombinedSolid />
                                                        <span className="ml-2 text-xs">{size}</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        )
                    }

                    )
                }
            </div>
            {   counter < length &&
                <div className="text-center my-7 rounded-3xl">
                    <button onClick={handleCounter} className="py-2 px-3 bg-secondary text-white rounded-xl">Ver mas</button>
                </div>
            }
        </Transition>
    );
}

export default Properties;