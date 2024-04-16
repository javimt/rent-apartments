import { useState } from "react";




function useHandleShow() {
    const [show, setShow] = useState(false)


    function toogleHandleShow(){
        setShow(prev => !prev)
    }

    function falseHandleShow(){
        setShow(false)
    }

    function trueHandleShow(){
        setShow(true)
    }




    return ( {
        show,
        toogleHandleShow,
        falseHandleShow,
        trueHandleShow
    });
}

export default useHandleShow;