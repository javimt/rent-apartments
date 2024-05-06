import { Link } from "react-router-dom";




function Error404() {
    return (
        <div className="flex flex-col  items-center font-quicksand justify-center  text-center px-5">
            <h1 className="text-5xl text-black mb-6 font-semibold">ERROR</h1>
            <h2 className="3xl mb-5">UPS! no se ha encontrado el Apartamento</h2>
            <img className="w-[300px]" src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-broken-house-vector-png-image_11055392.png" alt="" />
            <Link to={'/'} className="cursor-pointer py-3 px-4 bg-secondary text-white hover:bg-black transition-all my-3 rounded-xl delay-300">
                volver a la home
            </Link>
        </div>
    );
}

export default Error404;