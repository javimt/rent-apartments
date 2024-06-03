import { useRef } from "react";
import { BiImageAdd } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";

function ImageSelector({ handle = '', addFiles }) {
    const inputText = useRef(null)
    const inputFile = useRef(null)

    function handlerFunct() {
        handle(inputText.current.value)
        inputText.current.value = ''
    }

    function handleFile(e) {
        addFiles(e.target.files[0])
        setTimeout(() => {
            e.target.value = null
        }, 1200)
    }

    return (
        <div className="flex flex-col gap-2 mx-2 my-2">
            <label className="text-gray-400 text-[13px] mb-1">{'image'}</label>
            <div className="flex">
                <input ref={inputText} placeholder={"Inserte URL de la imagen"} type="text" className=" placeholder:text-[12px] w-full text-[12px] px-1 py-1 shadow-light border-[1px] text-gray-400 border-blue-950 rounded-md" />
                <button onClick={() => handlerFunct()} ><BiImageAdd className="size-[35px] px-1 py-1 bg-secondary rounded-lg text-white cursor-pointer hover:bg-black text-sm font-quicksand mx-2"/></button>
            </div>
            <div className="flex items-center">
                <input className="hidden" onChange={(e) => handleFile(e)} ref={inputFile} placeholder={"Inserte URL de la imagen"} type="file" />
                <button onClick={()=>{inputFile.current.click()}} className="flex gap-2 items-center text-xs border bg-black text-white p-2 rounded-lg">
                    Seleccionar archivo
                    <FaComputer className="size-[25px]"/>
                </button>
                
                <p className="text-xs text-gray-400 px-2">seleccione una imagen png, jpg o jpeg de su dispositivo...</p>
            </div>
        </div>
    );
}

export default ImageSelector;