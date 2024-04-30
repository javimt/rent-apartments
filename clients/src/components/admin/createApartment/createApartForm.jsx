import { useEffect, useState } from "react";
import useHandleInput from "../../../hooks/inputValues";
import InputNumberSection from "./formComponents/inputNumberSextion";
import InputTextSection from "./formComponents/inputTextSection";
import SelectOptionsSection from "./formComponents/selectOptionsSection";
import SelectSection from "./formComponents/selectSection";
import ImageSelector from "./formComponents/imagesSelector";
import ImagesRenderSection from "./formComponents/imagesRenderSection";



function CreateApartForm({render}) {
    const { handleInputs, input, addImages, deleteImage } = useHandleInput()

    useEffect(()=>{
        render(input)
    }, [input])

    console.log(input)

    return (
        <div className="flex flex-col justify-center  border xl:mx-auto p-1 font-quicksand">
            <div>
                <p className="text-gray-400 text-center">create apartment</p>
            </div>
            <span className="text-xs mx-2 my-2 block text-gray-400 font-extralight">Cart parameters</span>
            <div className="flex  flex-col md:flex-row ">
                <InputTextSection label={'urbanizacion'} name={"urbanizacion"} handle={handleInputs} value={input.urbanizacion} />
                <div className="flex">
                    <InputNumberSection label={'bedrooms'} handle={handleInputs} name={"bedrooms"} placeholder={'Numero'} value={input.bedrooms} />
                    <InputNumberSection label={'bathrooms'} handle={handleInputs} name={"bathrooms"} placeholder={'Numero'} value={input.bathrooms} />
                </div>
            </div>
                <div className="flex">
                    <InputNumberSection label={'size'} handle={handleInputs} name={"size"} placeholder={'Numero'} value={input.size} />
                    <InputNumberSection label={'price'} name={'price'} value={input.price} handle={handleInputs}/>
                    <SelectOptionsSection name={'status'} selectName={"status rent or sale"} handle={handleInputs} label={'status'} options={["rent", "sale"]} />
                </div>
            <div>
                <span className="text-xs mx-2 my-2 block text-gray-400 font-extralight">Map Location</span>
                <div className="flex  flex-col md:flex-row ">
                    <div className="flex">
                        <InputNumberSection label={'latitude'} handle={handleInputs} name={"lat"} placeholder={'Numero'} value={input.lat} />
                        <InputNumberSection label={'longitude'} handle={handleInputs} name={"lon"} placeholder={'Numero'} value={input.lon} />
                    </div>
                    <SelectSection name={'cityId'} handle={handleInputs} label={'city'} />
                </div>
            </div>
            <div >
                <div>
                    <div className="flex flex-col mx-2  ">
                        <label className="text-gray-400 mb-1 text-[13px]">description</label>
                        <textarea className="border " onChange={handleInputs} name={'description'} value={input.description} id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <span className="text-xs mx-2 my-2 block text-gray-400 font-extralight">Images Section</span>
                <div>
                    <ImageSelector handle={addImages} value=""/>
                    <ImagesRenderSection addImages={addImages} images={input.images} deleteImages={deleteImage} />
                </div>
            </div>
        </div>
    );
}

export default CreateApartForm;