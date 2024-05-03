import { useState } from "react";
import CreateApartForm from "./createApartForm";
import RenderNewApartSection from "./previewSection";




function CreateApartSect() {
    const [hookState, setHookState] = useState({input:{}, submit:()=>{}})

    function getinput(state){
        setHookState(state)
    }

    
  
    return ( 
        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-2  ">
            <CreateApartForm  render={getinput}/>
            <RenderNewApartSection input={hookState.input} submit={hookState.submit}/>
        </div>
     );
}

export default CreateApartSect;