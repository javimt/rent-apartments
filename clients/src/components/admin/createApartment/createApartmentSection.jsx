import { useState } from "react";
import CreateApartForm from "./createApartForm";
import RenderNewApartSection from "./renderNewApart";




function CreateApartSect() {
    const [input, setInput] = useState({})

    function getinput(inputParam){
        setInput(inputParam)
    }

    
  
    return ( 
        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-2  ">
            <CreateApartForm  render={getinput}/>
            <RenderNewApartSection input={input}/>
        </div>
     );
}

export default CreateApartSect;