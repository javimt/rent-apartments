
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import { MdOutlinePriceChange } from "react-icons/md";
import useOpenClose from '../../../../hooks/OpenCloseMenu';



function SearchPricingRange() {
    const { toogleOpen, openStatus } = useOpenClose()


    return (
        <div onClick={toogleOpen} className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer">
            <MdOutlinePriceChange />
            <div>
                <p>Rango de precio</p>
                <p className='text-xs'>Seleccione el rango de precios</p>
            </div>
            <div>
                {
                    openStatus ?
                        <GrFormUp />
                        :
                        <GrFormDown />
                }
            </div>
            {
                openStatus &&
                <div className='absolute top-[60px] py-3 px-4 bg-white shadow-light w-full left-0 z-[50]'>
                    <><p className='font-semibold'>$100 - $500</p></>
                    <><p className='font-semibold'>$500 - $1000</p></>
                    <><p className='font-semibold'>$1000 - $2000</p></>
                    <><p className='font-semibold'> mas de $2000</p></>

                </div>

            }
        </div>

    );
}

export default SearchPricingRange;