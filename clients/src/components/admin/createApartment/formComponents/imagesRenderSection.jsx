import { RiDeleteBin2Fill } from "react-icons/ri";




function ImagesRenderSection({images, addImages, deleteImages}) {
    return ( 
        <div className=" flex mx-1 gap-1">
            {
                images && images.map(img => {
                    return <div onClick={()=>deleteImages(img)} className="rounded-lg w-[80px] h-[50px] bg-cover bg-center object-fill" style={{backgroundImage:`url(${img})`}}>
                        <div className="w-full h-full bg-red-600 flex justify-center items-center text-xl text-white rounded-lg opacity-0 hover:opacity-100 transition-all delay-300 cursor-pointer">
                            <RiDeleteBin2Fill/>
                        </div>
                    </div>  
                })
            }
        </div>
     );
}

export default ImagesRenderSection;