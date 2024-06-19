import { useEffect, useState } from "react";

function useOpenClose(autoclose, delay) {
  const [openStatus, setOpenStatus] = useState(false);

  useEffect(()=>{
    if(autoclose && openStatus){
      setTimeout(()=>{
        close()
      },delay)
    }
  },[openStatus])

  function toogleOpen() {
    setOpenStatus((prev) => !prev);
  }

  function close() {
    setOpenStatus(false);
  }

  function open() {
    setOpenStatus(true);
  }

  return {
    openStatus,
    toogleOpen,
    close,
  };
}

export default useOpenClose;
