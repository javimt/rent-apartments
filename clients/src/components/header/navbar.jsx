import { AnimatePresence, animate, motion } from "framer-motion";
import dataLink from "./navContenLinks.json";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import useHandleScroll from "../../hooks/custom/HandleScroll";
import LoginButton from "../Auth0Buttons/LoginButton";
import LogoutButton from "../Auth0Buttons/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import AdminLink from "./adminLink";

const animationNavBar = {
  initial: {
    y: -20,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};
function NavBar({ openStatus, main = true }) {
  const { scrolling } = useHandleScroll();
  const { isAuthenticated, user } = useAuth0();

  function handleSetActive() {}

  return (
    <>
      { main &&
         <AnimatePresence>
         {scrolling ? (
           <motion.nav
             key={1}
             variants={animationNavBar}
             initial="initial"
             exit="exit"
             animate="animate"
             className="cursor-pointer ml-auto mr-auto md:fixed z-[9999] right-0 left-0 px-6 py-3 text-white bg-gray-400/40 top-10 rounded-3xl backdrop-blur w-fit"
           >
             <div className="items-center md:flex hidden gap-5">
               {dataLink.map(({ id, name, link }) => {
                 return (
                   <Link
                     key={id}
                     to={link}
                     spy={true}
                     smooth={true}
                     offset={0}
                     duration={1000}
                     className="px-3 py-2 text-black font-bold hover:text-secondary "
                   >
                     {name}
                   </Link>
                 );
               })}
               {isAuthenticated ? <LogoutButton /> : <LoginButton />}
             </div>
           </motion.nav>
         ) : (
           <div
             className={`${
               openStatus
                 ? "absolute z-[100] left-0 top-14 bg-white r-0 w-full px-4 py-4 "
                 : "hidden"
             } gap-5 md:flex`}
           >
             {dataLink.map(({ id, name, link, offSet }) => {
               return (
                 <div key={id} className="text-center text-[18px]">
                   <Link
                     to={link}
                     spy={true}
                     smooth={true}
                     offset={offSet} // Usar offset negativo cuando scrolling es true, de lo contrario, usar 0
                     duration={1000}
                     onSetActive={handleSetActive}
                     className="block border-b-[1px] p-1 bg-cover border-white font-bold hover:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoxq8E9MtXI2V61bu-3OmRTjv-USkAyIO8w&s')] rounded-lg  hover:text-white hover:border-b-[1px]  md:mb-0 mb-4 cursor-pointer"
                   >
                     {name}
                   </Link>
                 </div>
               );
             })}
             <div className="text-center text-[18px]">
               <AdminLink
                 className={
                   "block border-b-[1px] border-white md:mb-0 mb-4 cursor-pointer"
                 }
               />
             </div>
           </div>
         )}
       </AnimatePresence>
      }
    </>
   
  );
}

export default NavBar;
