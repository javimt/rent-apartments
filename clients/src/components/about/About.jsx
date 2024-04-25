import Transition from "../complements/transition";



function About() {
    return (

        <Transition className='grid  min-w-[400px] py-3 px-4 md:py-20 md:px-36 md:grid-cols-2 bg-slate-200/60  xl:px-36  font-quicksand  '>
            <div className="max-w-[100%]  mb-2 flex justify-center flex-col ">
                <h4 className="text-secondary font-semibold ">About us...</h4>
                <h2 className='my-4 text-3xl font-semibold'>Somos una empresa compuesta por un gran equipo muy talentoso, y nuestro objetivo es ser la empresa lider en bienes raices
                    brindndote el mejor servicio y acceso a las mejores unidades.</h2>
                <p className="mb-1 mt-7 text-secondary text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In error quisquam sit vero natus repellat adipisci velit explicabo provident reprehenderit cum beatae quis ipsam, aliquam sapiente inventore quibusdam veniam. Alias.</p>
                <div>
                    <button className="mx-auto block xl:mt-20 mt-5 text-xl  bg-secondary rounded-xl px-5 py-5 font-quicksand  text-white hover:bg-black">Contactar</button>
                </div>
            </div>
            <div>

                <div style={{ backgroundImage: 'url("https://storage.atlasplan.com/public/assets/press/2023-03-office/1-stone-effect-porcelain-stoneware-office-clamp_960_960_50.webp")' }}
                    className=" bg-cover bg-center h-[300px] object-fill md:h-[300px] md:max-w-[100%]  xl:h-[500px] xl:max-w-[700px] rounded-xl">
                        
                </div>
            </div>

        </Transition>



    );
}

export default About;