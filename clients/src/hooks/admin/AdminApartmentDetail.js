import { useState } from "react";



function useAdeminApartDetail() {
    const [detail, setDetail] = useState(null)

    function getDetail(id) {
        fetch(`https://api-rent-appartament.up.railway.app/apartment/${id}`)
            .then(response => response.json())
            .then(data => setDetail(data.data))
    }
    
    function resetDetail(){
        setDetail(null)
    }

    return {
        detail,
        resetDetail
    };
}

export default useAdeminApartDetail;