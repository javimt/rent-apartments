import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from 'framer-motion'
import { fadeIn } from "./transtionFadeIn";


function Transition({ children, className }) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    }, [isInView])

    return (
        <div ref={ref} >
            <motion.div
                initial='hidden'
                variants={fadeIn()}
                animate = {mainControls}
                exit="hidden"
                className={className}
                >
                
                {children} 
            </motion.div>
        </div>
    );
}

export default Transition;