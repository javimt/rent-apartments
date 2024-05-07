import { useState } from "react";
import { parseInput } from "../../utils/parseInput";



function useAdeminApartDetail() {
    const [detail, setDetail] = useState(null)

    function getDetail(id) {
        fetch(`https://api-rent-appartament.up.railway.app/apartment/${id}`)
            .then(response => response.json())
            .then(data => setDetail(data.data))
    }

    function deleteApartment(id){
        fetch(`https://api-rent-appartament.up.railway.app/apartment/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.status < 300 && alert('apartamento eliminado') )
        .catch(error => console.error(error))
    }

    function updateApartment(input, id) {
        const parsedInput = parseInput(input)
        console.log(parsedInput)
        fetch(`https://api-rent-appartament.up.railway.app/apartment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parsedInput)
        }).then(response => response.json()).then(response => response.status < 300 && alert('apartamento actualizado con exito'))
            .catch(error => console.error(error))
    }

    function resetDetail() {
        setDetail(null)
    }

    return {
        detail,
        resetDetail,
        getDetail,
        updateApartment,
        deleteApartment
    };
}

export default useAdeminApartDetail;