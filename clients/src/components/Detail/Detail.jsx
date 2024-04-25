import { useParams } from "react-router-dom";




function CardDetail() {

    const {id} = useParams()
    console.log(id)

    return ( 
        <div>
            <h2>{id}</h2>
        </div>
     );
}

export default CardDetail;