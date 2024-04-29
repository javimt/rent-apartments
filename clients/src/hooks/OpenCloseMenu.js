import { useState } from "react";

function useOpenClose() {
  const [openStatus, setOpenStatus] = useState(false);

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
