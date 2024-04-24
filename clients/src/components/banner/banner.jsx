import FlotedSearch from "./floatedSearch/flotedSearch";




function Banner() {
    return ( 
        <div className=" relative min-w-[400px]   mx-auto mt-10">
            <div className="pt-20 px-10 md:pt-0 md:min-h-[80vh] min-h-[40vh]  bg-banner2 bg-cover bg-no-repeat bg-center  md:rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="absolute top-0 left-0 w-full md:rounded-3xl rounded-0 h-full bg-black opacity-50 z-[1]">

                </div>
                <div className="max-w-3xl font-quicksand text-center text-white relative z-[1]">
                    <h2 className="text-5xl font-semibold font-quicksand">
                        Descubre tu departamento ideal en toda Medellin
                    </h2>
                    <p className="mt-2 text-xl md:mt-8">con mas de 30 años en el mercado contamos con numerosos apartamentos y los mejores profesionales</p>
                </div>
                <div>
                    <FlotedSearch/>
                </div>
            </div>
        </div>
     );
}

export default Banner;