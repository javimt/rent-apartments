import { useState, useEffect } from 'react';


function useHandleInput() {

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        images: [],
        price: 0,
        description: "",
        bedrooms: 1,
        size: "",
        rating: 3,
        bathrooms: 1,
        urbanizacion: "",
        lat: "",
        lon: "",
        status: "rent",
        cityId:''
    })

    function verifyInputValidation(){
        return
    }

    function deleteImage(e){
        setInput({
            ...input,
            images: input.images.filter(url => url != e )
        })
    }

    function addImages(e){
        if(e.current.value){
            setInput({
                ...input,
                images: [...input.images, e.current.value ]
            })
        }
    }

    function handleInputs(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        console.log(input)
    }



    return {
        input,
        handleInputs,
        addImages,
        deleteImage
    };
}

export default useHandleInput;