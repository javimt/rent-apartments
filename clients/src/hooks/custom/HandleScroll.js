import { useEffect, useState } from "react";

function useHandleScroll() {
  const [scrolling, setScrolling] = useState(false);

  function handleScroll() {
    if (window.scrollY >= window.innerHeight - 400) {
      setScrolling(true);
    } else if (window.scrollY < 100) {
      setScrolling(false);
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrolling,
  };
}

export default useHandleScroll;
