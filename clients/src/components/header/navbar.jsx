
import { AnimatePresence, animate, motion } from 'framer-motion'
import dataLink from './navContenLinks.json'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useHandleScroll from '../../hooks/HandleScroll';
const animationNavBar = {
    initial: {
        y: -20,
        opacity: 0
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 100,
            damping: 20,
            type: 'spring'
        }
    },
    exit: {
        y: -20,
        opacity: 0
    }
}
function NavBar({ openStatus }) {

    const { scrolling } = useHandleScroll()

    console.log(scrolling)
    return (
        <AnimatePresence>
            {
                scrolling ? <motion.nav
                    key={1}
                    variants={animationNavBar}
                    initial='initial'
                    exit='exit'
                    animate='animate'
                    className='ml-auto mr-auto md:fixed z-[9999] right-0 left-0 px-6 py-3 text-white bg-gray-400/40 top-10 rounded-3xl backdrop-blur w-fit'
                >
                    <div className='items-center md:flex hidden gap-5'>
                        {
                            dataLink.map(({ id, name, link }) => {
                                return <Link key={id} to={link} className='px-3 py-2 text-black font-bold hover:text-secondary'>
                                    {name}
                                </Link>
                            })
                        }{
                            <Link className='px-3 py-2 bg-secondary rounded-lg hover:bg-black '>Login</Link>
                        }
                    </div>


                </motion.nav>
                    : <div className={`${openStatus ? 'absolute z-[100] left-0 top-14 bg-white r-0 w-full px-4 py-4 ' : 'hidden'} gap-5 md:flex`}>
                        {
                            dataLink.map(({ id, name, link }) => {
                                return (
                                    <div className='text-center text-[18px]'> 
                                        <Link key={id} to={link} className='block border-b-[1px] border-white hover:text-secondary hover:border-b-[1px] hover:border-b-secondary md:mb-0 mb-4'>
                                            {name}
                                        </Link>
                                    </div>
                                )

                            })
                        }
                    </div>

            }
        </AnimatePresence>
    );
}

export default NavBar;


