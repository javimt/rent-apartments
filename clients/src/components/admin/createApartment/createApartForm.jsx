


function CreateApartForm() {
    return (
        <div className="flex flex-col border xl:mx-5 p-1 font-quicksand">
            <div>
                <p className="text-center">create apartment</p>
            </div>
            <div className="flex flex-col md:flex-row mt-5 ">
                <div className="flex flex-col mx-2 my-2">
                    <label className="">urbanizacion</label>
                    <input type="text" className="py-1 shadow-light border-[1px] border-blue-950 rounded-md" />
                </div>
                <div className="flex flex-col mx-2 my-2">
                    <label className="">urbanizacion</label>
                    <input type="text" className=" py-1 shadow-light border-[1px] border-blue-950 rounded-md" />
                </div>
                <div className="flex flex-col mx-2 my-2">
                    <label className="">urbanizacion</label>
                    <input type="text" className=" py-1 shadow-light border-[1px] border-blue-950 rounded-md" />
                </div>

            </div>
            <div className="flex  flex-col md:flex-row ">
                <div className="flex flex-col mx-2 my-2">
                    <label className="">urbanizacion</label>
                    <input type="text" className=" py-1 shadow-light border-[1px] border-blue-950 rounded-md" />
                </div>
                <div className="flex">

                    <div className="flex flex-col mx-2 my-2">
                        <label className="">bathrooms</label>
                        <input type="number" className=" py-1 max-w-[50px] shadow-light border-[1px] border-blue-950 rounded-md" />
                    </div>
                    <div className="flex flex-col mx-2 my-2">
                        <label className="">bedrooms</label>
                        <input type="number" className=" py-1 max-w-[50px] shadow-light border-[1px] border-blue-950 rounded-md" />
                    </div>
                    <div className="flex flex-col mx-2 my-2">
                        <label className="">size</label>
                        <input type="number" className=" py-1 max-w-[50px] shadow-light border-[1px] border-blue-950 rounded-md" />
                    </div>
                    <div className="flex flex-col mx-2 my-2">
                        <label className="">status</label>
                        <input type="text" className=" py-1 max-w-[50px] shadow-light border-[1px] border-blue-950 rounded-md" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateApartForm;