


function ModalAddAnotations({ openStatus, toogleOpen }) {
    return (
        <section className={`bg-gray-600/45  top-0 right-0 w-full h-full ${openStatus ? 'fixed' : 'hidden'} min-w-[400px]`} >
            <div className="absolute right-[calc(50%-150px)] top-[50%] min-w-[300px] bg-white h-[250px] p-4 pt-11 rounded-lg">
                <div className="absolute top-1 right-1">
                    <div className="flex justify-end">
                    <button onClick={toogleOpen} className="p-1 bg-red-500 rounded text-xs text-white  hover:bg-red-400">close</button>
                </div>
                </div>
                
                <div className="flex flex-col">
                    <label className="text-gray-400 text-xs" htmlFor="">campo 1</label>
                    <input className="mt-1 mb-4 border rounded p-1" type="text" />
                </div>
                <div className="flex flex-col ">
                    <label className="text-gray-400 text-xs p-1" htmlFor="">campo 2</label>
                    <input className="mt-1 mb-4 border rounded p-1" type="text" />
                </div>
                <div>
                    <button className="border p-2 rounded-lg">add</button>
                </div>
            </div>
        </section>
    );
}

export default ModalAddAnotations;