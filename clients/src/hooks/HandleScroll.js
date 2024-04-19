import { useEffect, useState } from "react";




function useHandleScroll() {
    
    const [scrolling, setScrolling ] = useState(false)

    function handleScroll(){
        
        if(window.scrollY >= window.innerHeight - 600){
            
            setScrolling(true)
        }else{
            setScrolling(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        console.log(window.innerHeight - 400)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    
    return {
        scrolling,
    }
}

export default useHandleScroll;