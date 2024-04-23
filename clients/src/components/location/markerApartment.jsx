import { icon } from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import useGetApartments from "../../hooks/GetApartments";
import { FaMapMarkedAlt } from 'react-icons/fa'



function MarkerAppartment({ selectMarker }) {

    const { apartments } = useGetApartments()
    const fnMap = useMap()
    const customIcon = icon({
        iconUrl: 'https://www.pngall.com/wp-content/uploads/11/Vector-Apartment-Transparent.png',
        iconSize: [40, 40]
    })
    return (
        <div className="font-quicksand">
            {
                apartments && apartments.map(({ lon, lat, images, urbanizacion, id }) => {
                    return <Marker key={id} position={{ lon, lat }} icon={customIcon} eventHandlers={{
                        click: () => { selectMarker({ lon, lat }, fnMap) }
                    }}>
                        <Popup>
                            <div className="flex items-center justify-center mb-2 font-quicksand">
                                <span className="mx-4 text-secondary">
                                    <FaMapMarkedAlt />
                                </span>
                                <p className="text-xs text-secondary font-semibold">{urbanizacion}</p>
                            </div>
                            <div style={{ backgroundImage: `url(${images[0]})` }} className="mx-auto w-[150px] h-[200px] bg-cover object-fill bg-center rounded-xl">
                            </div>
                            <button className="mx-auto block rounded-md mt-2 px-3 py-2 bg-secondary hover:bg-black text-white">ver Propiedad</button>
                        </Popup>
                    </Marker>
                })
            }
        </div>
    );
}

export default MarkerAppartment;