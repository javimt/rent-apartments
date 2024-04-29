import CreateApartForm from "./createApartForm";
import RenderNewApartSection from "./renderNewApart";




function CreateApartSect() {
    return ( 
        <div className="grid md:grid-cols-2 gap-2 justify-center ">
            <CreateApartForm/>
            <RenderNewApartSection/>
        </div>
     );
}

export default CreateApartSect;