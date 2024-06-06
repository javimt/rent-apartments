


function ModalMainContainer({ width, height, close, openStatus, getDetail, detail }) {



    return (

        <section className={`bg-gray-600/45  top-0 right-0 w-full h-full ${openStatus ? 'fixed' : 'hidden'}`} >
            <div className={`w-[${width}px] h-[${height}px]` + ` border bg-white rounded-lg absolute top-[calc(50%-100px)] right-[calc(50%-150px)] p-1 shadow-xl`}>
                <div className="flex justify-end">
                    <button onClick={close} className="p-1 bg-red-500 rounded text-xs text-white  hover:bg-red-400">close</button>
                </div>
                <div>
                    {
                        detail && <div>{
                            detail.Anotations.length > 0
                            ?
                            <div className="overflow-y-scroll" style={{scrollbarWidth:'0px'}}>
                                <p className={`text-xs text-gray-400 pb-2 `}>pending:</p>
                                <p className={`text-xs text-gray-500`}>{detail.Anotations[0].pending}</p>
                                <hr className="my-2"/>
                                <p className={`text-xs text-gray-400 pb-1`}>observations:</p>
                                <p className={`text-xs text-gray-500`}>{detail.Anotations[0].observations}</p>
                            </div>
                            :
                            <div className="overflow-y-scroll" style={{scrollbarWidth:'0px'}}>
                            <p className={`text-xs text-gray-400 pb-2 `}>pending:</p>
                            <p className={`text-xs text-gray-500`}>there are no earrings</p>
                            <hr className="my-2"/>
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