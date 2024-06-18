import useAnotations from "../../../hooks/admin/adminAnotations";



function ModalAddAnotations({ openStatus, toogleOpen, detail, resetData }) {

    const {handleInputAnotation, submitAnotations, input} = useAnotations()
    console.log("🚀 ~ ModalAddAnotations ~ input:", input)

    function handleSubmit(){
        submitAnotations(detail.id)
        .then(()=> resetData())

    }
    

    return (
        
        <section className={`bg-gray-600/45  top-0 right-0 w-full h-full ${openStatus ? 'fixed' : 'hidden'} min-w-[400px] font-quicksand`}>
            <div className="absolute right-[calc(50%-150px)] top-[20%] min-w-[300px] bg-white h-[350px] p-4 pt-11 rounded-lg">
            {   
            <div className="flex flex-col">
                <span className="text-xs text-gray-400">{`urb: ${detail && detail.urbanizacion}`}</span>
                <span className="text-xs text-gray-400">{`id: ${detail && detail.id}`}</span>
            </div>
            }
                <div className="absolute top-1 right-1">
                    <div className="flex justify-end">
                    <button onClick={toogleOpen} className="p-1 bg-red-500 rounded text-xs text-white  hover:bg-red-400">close</button>
                </div>
                </div>
                
                <div className="flex flex-col">
                    <label className="text-gray-400 text-xs" htmlFor="">Pending</label>
                    <textarea onChange={(e)=>handleInputAnotation(e)} name="pending" value={input.pending} rows={3} className="mt-1 mb-4 border rounded p-1 text-xs text-gray-400" type="text" />
                </div>
                <div className="flex flex-col ">
                    <label className="text-gray-400 text-xs p-1" htmlFor="">Observations</label>
                    <textarea onChange={(e)=>handleInputAnotation(e)} name="observations" value={input.observations} rows={3} className="mt-1 mb-4 border rounded p-1 text-xs text-gray-400"type="text" />
                </div>
                <div>
                    <button onClick={handleSubmit} className="border p-2 rounded-lg text-gray-400 text-sm">Anotate</button>
                </div>
            </div>
        </section>
    );
}

export default ModalAddAnotations;