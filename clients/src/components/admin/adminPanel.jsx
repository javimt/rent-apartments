import { gridLayer } from "leaflet";
import { useState } from "react";
import CreateApartSect from "./createApartment/createApartmentSection";
import panelOptions from './sectionsPanel/sidePanel/panelOptions.json'
import CPanel from "./sectionsPanel/sidePanel/cPanel";
import useHandlePanelOptions from "../../hooks/handlePanelOptions";



function AdminPanel( ) {
   
    const {handleOptions, section} = useHandlePanelOptions()

    return ( 
        <div className="grid md:grid-cols-[15%,1fr] md:grid-rows-[1fr] grid-rows-[10%,1fr] xl:px-40 h-screen gap-2">
            <CPanel handleOption={handleOptions}/>
            <div className=" xl:px-10 xl:py-10 py-4 px-4 ">
                {section}
            </div>
        </div>
     );
}

export default AdminPanel;