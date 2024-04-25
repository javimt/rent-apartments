import SearchButton from "./searchElements/searchButton";
import SearchLocation from "./searchElements/searchLocation";
import SearchPricingRange from "./searchElements/searchPricingRange";
import SearchProperty from "./searchElements/searchProperty";
import Transition from "../../complements/transition";




function FlotedSearch() {
    return (
        
        <Transition className="absolute  z-[10] md:bottom-[0] left-0 right-0 w-[90%] mx-auto">
            <div className='relative top-0 md:translate-y-1/2 bg-white flex flex-col py-4 px-3 rounded-md md:flex-row backdrop:blur shadow-light justify-around'>
                <SearchLocation/>
                <SearchProperty/>
                <SearchPricingRange/>
                <SearchButton/>
            </div>
        </Transition>
    );
}

export default FlotedSearch;