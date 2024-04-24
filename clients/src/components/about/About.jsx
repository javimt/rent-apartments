import Transition from "../banner/floatedSearch/transition";



function About() {
    return (

        <Transition className='grid min-w-[400px]   px-4 md:py-20 md:px-36  font-quicksand xl:grid-cols-2 md:gap-28'>
            <div className="max-w-[100%]  mb-2 flex justify-center flex-col md:px-20">
                <h4 className="text-secondary font-semibold ">About us...</h4>
                <h2 className='my-4 text-3xl font-semibold'>Somos una empresa compuesta por un gran equipo muy talentoso, y nuestro objetivo es ser la empresa lider en bienes raices
                    brindndote el mejor servicio y acceso a las mejores unidades.</h2>
                <p className="mb-1 mt-7 text-secondary text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In error quisquam sit vero natus repellat adipisci velit explicabo provident reprehenderit cum beatae quis ipsam, aliquam sapiente inventore quibusdam veniam. Alias.</p>
            </div>
            
        </Transition>



    );
}

export default About;