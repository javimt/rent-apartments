import { parseToColombianMoney } from "../../utils/parseMoney";
import { LiaStarSolid, LiaBedSolid, LiaBathSolid, LiaRulerCombinedSolid } from 'react-icons/lia'
import Form from "./form";



function Property({ apartment }) {
    const { bedrooms, urbanizacion, price, rating, images, bathrooms, size, description } = apartment.data
    return (
        <main className="max-w-5xl mx-auto font-quicksand">
            <div className=" grid md:grid-cols-[70%,1fr] my-3 py-5">
                <div className="px-6">
                    <h1 className="text-3xl mb-4 text-secondary flex justify-between">

                        <span>{urbanizacion}</span>
                        <span className="font-semibold">{parseToColombianMoney(price)}</span>
                    </h1>
                    <div className="flex gap-5 items-center my-4">
                        <h2 className="font-semibold text-xl text-secondary">Valoration:</h2>
                        <div className="flex items-center px-2 py-1 rounded-lg bg-secondary top-2 right-2 text-white">
                            <LiaStarSolid />
                            <span>{rating.media}</span>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${images[0]})` }} className="w-full h-[500px] rounded-xl bg-cover bg-center object-fill">

                    </div>
                    <div className="gap-4 lg:flex mt-4">
                        <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300">
                            <LiaBedSolid />
                            <span className="text-sm text-secondary mx-1 font-semibold">{bedrooms}</span>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300">
                            <LiaBathSolid />
                            <span className="text-sm text-secondary mx-1 font-semibold">{bathrooms}</span>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300">
                            <LiaRulerCombinedSolid />
                            <span className="text-sm text-secondary mx-1 font-semibold">{size}</span>
                        </div>
                    </div>
                    <div className="mt-5 text-sm text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aspernatur, illum magni ipsum eius at minus! Eum iste dolorum fugiat fugit natus molestias consectetur deleniti amet possimus iure dolor culpa voluptate perferendis porro omnis aliquam est, corporis expedita voluptatum odio ab? Possimus in quasi, vitae nemo harum voluptatibus commodi delectus repudiandae, hic fugiat consequuntur officia at obcaecati odit modi, aliquid sapiente placeat itaque? Deserunt repellendus esse rem perferendis porro sapiente quae odit dignissimos praesentium repellat aliquam eius, ea voluptatem voluptatibus obcaecati earum quasi consectetur similique? Fuga amet perspiciatis nihil ratione? Eius iure natus harum quod voluptatibus est dolores suscipit laudantium.
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="text-secondary text-sm font-semibold">Politicas</h3>
                        <div className="mt-1 text-sm color">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut ratione ipsam esse commodi eius impedit et ut ex, nemo magnam explicabo, repellendus illum id reprehenderit itaque nesciunt. Quasi, voluptatibus!
                        </div>
                    </div>

                </div>
                <Form />

            </div>

        </main>
    );
}

export default Property;