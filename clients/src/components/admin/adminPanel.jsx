import { gridLayer } from "leaflet";
import { useState } from "react";
import CreateApartSect from "./createApartment/createApartmentSection";
import panelOptions from './sectionsPanel/sidePanel/panelOptions.json'
import CPanel from "./sectionsPanel/sidePanel/cPanel";
import useHandlePanelOptions from "../../hooks/custom/handlePanelOptions";
import RenderSection from "./sectionsPanel/renderSection/renderInfoSection";



function AdminPanel() {

    const { handleOptions, section } = useHandlePanelOptions()

    return (
        
            <div className="grid md:grid-cols-[30%,1fr] xl:grid-cols-[20%,1fr] md:grid-rows-[1fr] grid-rows-[10%,1fr] xl:px-40 h-screen gap-2">
                <CPanel handleOption={handleOptions} />
                <RenderSection section={section} />
            </div>
        
    );
}

export default AdminPanel;