import { useRef } from "react";



function ImageSelector({ handle=''}) {
    const element = useRef(null)
    
    function handlerFunct(){
        handle(element)
        element.current.value = ''
    }

    return (
        <div className="flex flex-col mx-2 my-2">
            <label className="text-gray-400 text-[13px] mb-1">{'image'}</label>
            <div className="flex">
                <input ref={element} placeholder={"inserte texto"}  type="text" className=" placeholder:text-[12px] w-full text-[12px] px-1 py-1 shadow-light border-[1px] text-gray-400 border-blue-950 rounded-md" />
                <button onClick={() => handlerFunct()}  className=" px-2 py-2 bg-secondary rounded-lg text-white cursor-pointer hover:bg-black text-sm font-quicksand mx-2">Search</button>
            </div>
        </div>
    );
}

export default ImageSelector;