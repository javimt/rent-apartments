import useAdminApartments from "../../../hooks/admin/adminApartments";
import RentSection from "./rent/rentSection";
import SaleSection from "./sale/saleSection";
import Transition from '../../complements/transition'
import EditApartment from "./edit/editSection";
import useAdeminApartDetail from "../../../hooks/admin/AdminApartmentDetail";
import RenderNewApartSection from "../createApartment/previewSection";
import { useState } from "react";
import useHandleInput from "../../../hooks/custom/inputValues";


function ListApartmentSection() {
    const [hookState, setHookState] = useState({input:{}, submit:()=>{}})

    const {input} = useHandleInput()

    function getinput(state){
        setHookState(state)
    }

    const { apartments, resetData} = useAdminApartments()

    const {detail, getDetail, resetDetail, deleteApartment} = useAdeminApartDetail()
    
    return (
            <dir className="grid h-[60%] md:grid-cols-1 xl:grid-cols-2 gap-2 p-0  ">
                {detail ? <EditApartment sendInput ={setHookState} detail={detail}/>:<RentSection resetData={resetData} getDetail={getDetail} deleteApartment= {deleteApartment} apartments={apartments.rent} />}
                
                {detail  ? <RenderNewApartSection input={hookState.input} submit={hookState.submit}/> : <SaleSection resetData={resetData} deleteApartment= {deleteApartment} getDetail={getDetail} apartments={apartments.sale} />}
            </dir>
    );
}

export default ListApartmentSection;