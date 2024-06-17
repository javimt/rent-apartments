import { TiDocumentDelete } from "react-icons/ti";
import { MdFactCheck, MdDeleteSweep } from "react-icons/md";
import useAdminApartments from "../../../hooks/admin/adminApartments";
function ModalMainContainer({ width, height, close, openStatus, getDetail, detail }) {
    const { changeStatusFromAnotations } = useAdminApartments()

    function handleAnotation(id, status) {

        changeStatusFromAnotations(id, status)
        .then(() => getDetail(detail.id))
    }

    return (

        <section className={`bg-gray-600/45  top-0 right-0 w-full h-full ${openStatus ? 'fixed' : 'hidden'}`} >
            <div className={`w-[${width}px] min-h-[${height}px] max-h-[500px] overflow-scroll` + ` border bg-white rounded-lg absolute top-[100px] right-[calc(50%-150px)] p-1 shadow-xl`}>
                <div className="flex justify-end">
                    <button onClick={close} className="p-1 bg-red-500 rounded text-xs text-white  hover:bg-red-400">close</button>
                </div>
                <div className="flex flex-col">

                    {
                        detail && <div>{
                            detail.Anotations.length > 0
                                ?
                                <div className="overflow-y-scroll font-quicksand " >

                                    <div className="flex">
                                        <div className="w-[80px]">
                                            <p className={`text-xs text-gray-400 pb-2 `}>pending:</p>
                                        </div>
                                        <div>


                                            {
                                                detail.Anotations.map((anot, i) => {
                                                    return (

                                                        <div className="flex flex-col">
                                                            <div className="flex">
                                                                <p className={`text-xs text-gray-500 px-2 `}>N: {i + 1}</p>
                                                                <MdFactCheck onClick={() => handleAnotation(anot.id, 'update')} className="hover:text-red-500 shadow-lg cursor-pointer" />
                                                                <MdDeleteSweep onClick={() => handleAnotation(anot.id, 'delete')} className="hover:text-red-500 shadow-lg cursor-pointer" />
                                                                <p className={`text-[10px] text-gray-500 px-2 `}> -change status</p>
                                                            </div>
                                                            <p className={`text-xs text-gray-500 px-2 ${anot.status != 'pending' && 'line-through'}`}>{anot.pending}</p>
                                                            {
                                                                detail.Anotations.length > 1 && <hr />
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                            {detail.anotations}
                                        </div>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex overflow-y-scroll">
                                        <div className="w-[80px]">
                                            <p className={`text-xs text-gray-400 pb-1`}>observations:</p>
                                        </div>
                                        <div className="flex flex-col">

                                            {
                                                detail.Anotations.map((anot, i) => {
                                                    return (
                                                        <div className="flex flex-col">
                                                            <p className={`text-xs text-gray-500 px-2`}>N: {i + 1}</p>
                                                            <p className={`text-xs text-gray-500 px-2 ${anot.status != 'pending' && 'line-through'}`}>{anot.observations}</p>
                                                            {
                                                                detail.Anotations.length > 1 && <hr />
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>


                                    </div>

                                </div>
                                :
                                <div className="overflow-y-scroll" style={{ scrollbarWidth: '0px' }}>
                                    <p className={`text-xs text-gray-400 pb-2 `}>pending:</p>
                                    <p className={`text-xs text-gray-500`}>there are no earrings</p>
                                    <hr className="my-2" />
                                    <p className={`text-xs text-gray-400 pb-1`}>observations:</p>
                                    <p className={`text-xs text-gray-500`}>there are no obsevations</p>
                                </div>

                        }</div>
                    }
                </div>
            </div>
        </section>
    );
}

export default ModalMainContainer;