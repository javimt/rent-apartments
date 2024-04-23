import Transition from "../banner/floatedSearch/transition";
import {map} from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerAppartment from "./markerApartment";


function Location() {

    const coordinatePoint = {
        lat:6.25184,
        lng: -75.56359
    }

    const centerMarket = (postion, fnMap) =>{
        fnMap.flyTo({
            lat:postion.lat,
            lon:postion.lon
        })
    }

    return (
        <Transition className='px-4 py-8 md:py-44 xl:px-56 md:px-36 font-quicksand'>
            <h4 className="text-center text-secondary" id="location">Localization</h4>
            <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">
                Con departamentos ubicados a lo larrgo y ancho de todo Medellin
            </h2>

            <MapContainer center={coordinatePoint} zoom={13} scrollWheelZoom={false} className="h-[700px]">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
                <MarkerAppartment selectMarker={centerMarket}/>
            </MapContainer>
        </Transition>
      );
}

export default Location;