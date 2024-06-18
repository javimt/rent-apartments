import useGetApartments from "../../../../hooks/custom/GetApartments";
import useOpenClose from "../../../../hooks/custom/OpenCloseMenu";
import Transition from "../../../complements/transition";
import ModalAddAnotations from "../../modals/modalAddAnotation";
import ModalMainContainer from "../../modals/modalMainContaoner";
import CardApartAdmin from "../cardApartmentAdmin";





function RentSection({ apartments, getDetail, deleteApartment, resetData, detail, setEdit}) {
    
    const {close, openStatus, toogleOpen} = useOpenClose()
    const otherModalTogle = useOpenClose()
    
    
    return (
        <Transition className='h-full'>
            <div className=" md:h-[70%] shadow-xl p-3 overflow-y-scroll relative">
                <div>
                    <p className="text-gray-400 text-center p-2">Rents Apartment List</p>
                </div>
                {apartments && apartments.map(ap => {
                    return <CardApartAdmin key={ap.id} type={'rent'} setEdit={setEdit} toogleOpen={toogleOpen} toogleOpen2={otherModalTogle.toogleOpen}  resetData={resetData} deleteApartment={deleteApartment} getDetail={getDetail} apartment={ap} />
                })}

                <ModalMainContainer resetData={resetData} detail={detail} getDetail={getDetail} close={close} openStatus={openStatus} height={200} width={300}/>
                <ModalAddAnotations resetData={resetData} detail={detail} toogleOpen={otherModalTogle.toogleOpen} openStatus={otherModalTogle.openStatus}/>
            </div>
        </Transition>
    );
}

export default RentSection;