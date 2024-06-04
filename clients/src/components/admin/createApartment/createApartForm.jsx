import { useEffect, useState } from "react";
import useHandleInput from "../../../hooks/custom/inputValues";
import InputNumberSection from "./formComponents/inputNumberSextion";
import InputTextSection from "./formComponents/inputTextSection";
import SelectOptionsSection from "./formComponents/selectOptionsSection";
import SelectSection from "./formComponents/selectSection";
import ImageSelector from "./formComponents/imagesSelector";
import ImagesRenderSection from "./formComponents/imagesRenderSection";
import Transition from "../../complements/transition";
import AlertComponent from "./formComponents/alertComponent";
import useCloudinary from "../../../hooks/custom/cloudinary";

function CreateApartForm({ render }) {
  const { handleInputs, input, addImages, deleteImage, error, submit,addUrl } = useHandleInput();
  const {uploadToCloudinary} = useCloudinary(addUrl)

  useEffect(() => {
    render({ input: input, submit: submit });
  }, [input]);

  return (
    <Transition className="flex flex-col justify-center  shadow-2xl rounded-lg xl:mx-auto p-1 font-quicksand">
      <div>
        <p className="text-gray-400 text-center">create apartment</p>
      </div>
      <span className="text-xs mx-2 my-2 block text-gray-400 font-extralight">
        Cart parameters
      </span>
      <div className="flex  flex-col md:flex-row ">
        <div className="flex flex-col">
          <InputTextSection
            label={"urbanizacion"}
            name={"urbanizacion"}
            handle={handleInputs}
            value={input.urbanizacion}
          />
          <AlertComponent errors={error} property={"urbanizacion"} />
        </div>
        <div className="flex">
          <InputNumberSection
            label={"bedrooms"}
            handle={handleInputs}
            name={"bedrooms"}
            placeholder={"Numero"}
            value={input.bedrooms}
          />
          <InputNumberSection
            label={"bathrooms"}
            handle={handleInputs}
            name={"bathrooms"}
            placeholder={"Numero"}
            value={input.bathrooms}
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <InputNumberSection
            label={"size"}
            handle={handleInputs}
            name={"size"}
            placeholder={"Numero"}
            value={input.size}
          />
          <AlertComponent property={"size"} errors={error} />
        </div>
        <div className="flex flex-col">
          <InputNumberSection
            label={"price"}
            name={"price"}
            value={input.price}
            handle={handleInputs}
          />
          <AlertComponent property={"price"} errors={error} />
        </div>
        <SelectOptionsSection
          name={"status"}
          selectName={"status rent or sale"}
          handle={handleInputs}
          label={"status"}
          options={["rent", "sale"]}
        />
      </div>
      <div>
        <span className="text-xs mx-2 my-2 block text-gray-400 font-extralight">
          Map Location
        </span>
        <div className="flex  flex-col md:flex-row ">
          <div className="flex">
            <div className="flex flex-col">
              <InputNumberSection
                label={"latitude"}
                handle={handleInputs}
                name={"lat"}
                placeholder={"Numero"}
                value={input.lat}
              />
              <AlertComponent property={"lat"} errors={error} />
            </div>
            <div className="flex flex-col">
              <InputNumberSection
                label={"longitude"}
                handle={handleInputs}
                name={"lon"}
                placeholder={"Numero"}
                value={input.lon}
              />
              <AlertComponent property={"lon"} errors={error} />
            </div>
          </div>

          <div className="flex flex-col">
            <SelectSection
              name={"CityId"}
              handle={handleInputs}
              label={"city"}
            />
            <AlertComponent property={"city"} errors={error} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col mx-2  ">
              <label className="text-gray-400 mb-1 text-[13px]">
                description
              </label>
              <textarea
                className="border text-gray-400 mb-1 text-[13px] p-2 "
                onChange={handleInputs}
                name={"description"}
                value={input.description}
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <AlertComponent property={"description"} errors={error} />
            </div>
          </div>
        </div>
        <span className="text-xs mx-2 my-2 block text-gray-400 font-extralight">
          Images Section
        </span>
        <div>
          <div className="flex flex-col">
            <ImageSelector handle={addImages} addFiles={uploadToCloudinary} value="" />
            <AlertComponent property={"images"} errors={error} />
          </div>
          <ImagesRenderSection
            addImages={addImages}
            images={input.images}
            deleteImages={deleteImage}
          />
        </div>
      </div>
    </Transition>
  );
}

export default CreateApartForm;
